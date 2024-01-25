import {
  Typography,
  Box,
  styled,
  Button,
  Stack,
  Container,
} from "@mui/material";
import html2PDF from "jspdf-html2canvas";

import { theme } from "../../theme";
import React, { useState, useRef } from "react";
import Sentiment from "../SentimentAnalysis/Sentiment";
import SummarizeTranscript from "../Summarization/SummarizeTranscript";
import TopicDetection from "../TopicDetection/TopicDetection";

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
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 2, md: 4 }}
        sx={{ marginTop: "20px" }}
      >
        <StyledBtn
          onClick={() => setActions({ ...actions, showSentiment: true })}
        >
          Show Sentiment
        </StyledBtn>
        <StyledBtn
          onClick={() => setActions({ ...actions, showSummary: true })}
        >
          Summarize
        </StyledBtn>
        <StyledBtn onClick={() => setActions({ ...actions, showTopic: true })}>
          Detect topic
        </StyledBtn>
        <StyledBtn onClick={handleTranscribeDownload}>Download</StyledBtn>
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
