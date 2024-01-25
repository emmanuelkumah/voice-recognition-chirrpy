import { Typography, Box, styled, Button, Stack, Avatar } from "@mui/material";
import html2PDF from "jspdf-html2canvas";

import { theme } from "../../theme";
import React, { useState, useRef } from "react";
import Sentiment from "../SentimentAnalysis/Sentiment";
import SummarizeTranscript from "../Summarization/SummarizeTranscript";
import TopicDetection from "../TopicDetection/TopicDetection";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import TopicIcon from "@mui/icons-material/Topic";
import DownloadIcon from "@mui/icons-material/Download";
import { yellow } from "@mui/material/colors";

const TranscriptSuccess = ({ transcript }) => {
  const [actions, setActions] = useState({
    showSentiment: false,
    showSummary: false,
    showTopic: false,
  });

  const transcribeRef = useRef(null);
  const StyledBox = styled(Box)(({ theme }) => ({
    background: "#fff",
    width: "100%",
    marginTop: "30px",
    padding: "20px",
    height: "auto",
    borderRadius: "10px",
  }));

  const StyledBtn = styled(Button)(({ theme }) => ({
    textTransform: "capitalize",
    fontFamily: "Poppins",
    border: "1px solid #881600",
    borderRadius: "10px",
  }));
  const handleTranscribeDownload = async () => {
    const pdf = await html2PDF(transcribeRef.current, {
      jsPDF: {
        format: "a4",
      },
      imageType: "image/jpeg",
      output: "./pdf/generate.pdf",
    });
  };

  return (
    <>
      <StyledBox ref={transcribeRef}>
        <Typography variant="body1">{transcript.text}</Typography>
      </StyledBox>
      <Stack direction="row" spacing={3} sx={{ marginTop: "20px" }}>
        <Avatar
          sx={{ bgcolor: "#6E4555" }}
          onClick={() => setActions({ ...actions, showSummary: true })}
        >
          <SummarizeIcon />
        </Avatar>
        <Avatar
          sx={{ bgcolor: "#E8B4BC" }}
          onClick={() => setActions({ ...actions, showSentiment: true })}
        >
          <SentimentSatisfiedAltIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: "#3A3238" }}>
          <TopicIcon
            onClick={() => setActions({ ...actions, showTopic: true })}
          />
        </Avatar>
        <Avatar sx={{ bgcolor: "#880e4f" }}>
          <DownloadIcon onClick={handleTranscribeDownload} />
        </Avatar>
      </Stack>

      {actions.showSentiment && (
        <Sentiment sentimentAnalysis={transcript.sentiment_analysis_results} />
      )}
      {actions.showSummary && (
        <SummarizeTranscript summary={transcript.summary} />
      )}
      {actions.showTopic && <TopicDetection transcript={transcript} />}
    </>
  );
};

export default TranscriptSuccess;
