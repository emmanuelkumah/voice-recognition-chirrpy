import { Typography, Box, styled, Button, Stack } from "@mui/material";
import { theme } from "../../theme";
import React, { useState } from "react";
import Sentiment from "../SentimentAnalysis/Sentiment";
import SummarizeTranscript from "../Summarization/SummarizeTranscript";
import TopicDetection from "../TopicDetection/TopicDetection";

const TranscriptSuccess = ({ transcript }) => {
  const [status, setStatus] = useState({
    hasSentiment: false,
    hasSummary: false,
    hasDetectedTopic: false,
  });

  const StyledBox = styled(Box)(({ theme }) => ({
    background: "#fff",
    marginTop: "30px",
    padding: "20px",
    height: "auto",
    borderRadius: "10px",
  }));

  return (
    <>
      <StyledBox>
        <Typography variant="body1">{transcript.text}</Typography>
      </StyledBox>
      <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
            textTransform: "capitalize",
            fontFamily: "Poppins",
            padding: "5px 15px",
            "&:hover": {
              backgroundColor: "#1C7C54",
              color: "#fff",
            },
            "&:focus": {
              backgroundColor: "#1C7C54",
              color: "#fff",
            },
          }}
          onClick={() => setStatus({ ...status, hasSentiment: true })}
        >
          Show Sentiments
        </Button>
        {status.hasSentiment && (
          <Sentiment
            sentimentAnalysis={transcript.sentiment_analysis_results}
          />
        )}
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
            textTransform: "capitalize",
            fontFamily: "Poppins",
            padding: "5px 15px",
            "&:hover": {
              backgroundColor: "#1C7C54",
              color: "#fff",
            },
            "&:focus": {
              backgroundColor: "#1C7C54",
              color: "#fff",
            },
          }}
          onClick={() => setStatus({ ...status, hasSummary: true })}
        >
          Summarize
        </Button>
        {status.hasSummary && (
          <SummarizeTranscript summary={transcript.summary} />
        )}
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
            textTransform: "capitalize",
            fontFamily: "Poppins",
            padding: "5px 15px",
            "&:hover": {
              backgroundColor: "#1C7C54",
              color: "#fff",
            },
            "&:focus": {
              backgroundColor: "#1C7C54",
              color: "#fff",
            },
          }}
          onClick={() => setStatus({ ...status, hasDetectedTopic: true })}
        >
          Detect Topic
        </Button>
        {status.hasDetectedTopic && <TopicDetection transcript={transcript} />}
      </Stack>
    </>
  );
};

export default TranscriptSuccess;
