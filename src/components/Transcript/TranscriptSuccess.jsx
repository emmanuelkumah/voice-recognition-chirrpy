import {
  Typography,
  Box,
  styled,
  Button,
  Stack,
  Avatar,
  Backdrop,
  Divider,
  Paper,
  Tooltip,
} from "@mui/material";
import html2PDF from "jspdf-html2canvas";

import { theme } from "../../theme";
import React, { useState, useRef, useEffect } from "react";
import Sentiment from "../SentimentAnalysis/Sentiment";
import SummarizeTranscript from "../Summarization/SummarizeTranscript";
import TopicDetection from "../TopicDetection/TopicDetection";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import TopicIcon from "@mui/icons-material/Topic";
import DownloadIcon from "@mui/icons-material/Download";

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

  const handleOpenSummaryModal = () => {
    setActions({ ...actions, showSummary: true });
  };
  return (
    <>
      <Paper
        ref={transcribeRef}
        sx={{
          padding: "20px",
          marginTop: "20px",
          maxHeight: "400px",
          overflow: "auto",
        }}
      >
        <Typography variant="h4">Hey! We have it ✌🏽 💪🏾 </Typography>
        <Divider />
        <Typography variant="body1" sx={{ paddingTop: "10px" }}>
          {transcript.text}
        </Typography>
      </Paper>
      <Stack
        direction="row"
        spacing={3}
        sx={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <Tooltip title="Summary" arrow>
          <Avatar
            sx={{
              "&:hover": {
                bgcolor: "#6E4555",
              },
            }}
            onClick={handleOpenSummaryModal}
          >
            <SummarizeIcon />
          </Avatar>
        </Tooltip>
        <Tooltip title="Sentiments" arrow>
          <Avatar
            sx={{ "&:hover": { bgcolor: "#E8B4BC" } }}
            onClick={() => setActions({ ...actions, showSentiment: true })}
          >
            <SentimentSatisfiedAltIcon />
          </Avatar>
        </Tooltip>
        <Tooltip title="Topic">
          <Avatar
            sx={{
              "&:hover": {
                bgcolor: "#3A3238",
              },
            }}
          >
            <TopicIcon
              onClick={() => setActions({ ...actions, showTopic: true })}
            />
          </Avatar>
        </Tooltip>
        <Tooltip title="Download" arrow>
          <Avatar sx={{ "&:hover": { bgcolor: "#880e4f" } }}>
            <DownloadIcon onClick={handleTranscribeDownload} />
          </Avatar>
        </Tooltip>
      </Stack>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={actions.showSummary}
        onClick={() => setActions({ ...actions, showSummary: false })}
      >
        {actions.showSummary && (
          <SummarizeTranscript summary={transcript.summary} />
        )}
      </Backdrop>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={actions.showSentiment}
        onClick={() => setActions({ ...actions, showSentiment: false })}
      >
        {actions.showSentiment && (
          <Sentiment
            sentimentAnalysis={transcript.sentiment_analysis_results}
          />
        )}
      </Backdrop>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={actions.showTopic}
        onClick={() => setActions({ ...actions, showTopic: false })}
      >
        {actions.showTopic && <TopicDetection transcript={transcript} />}
      </Backdrop>
    </>
  );
};

export default TranscriptSuccess;
