import { Typography, Box, styled } from "@mui/material";
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
    background: theme.palette.secondary.main,
    height: "auto",
  }));

  return (
    <>
      <StyledBox>
        <Typography variant="body1">{transcript.text}</Typography>
      </StyledBox>
      <Box>
        <button onClick={() => setStatus({ ...status, hasSentiment: true })}>
          Show Sentiments
        </button>
        {status.hasSentiment && (
          <Sentiment
            sentimentAnalysis={transcript.sentiment_analysis_results}
          />
        )}
        <button onClick={() => setStatus({ ...status, hasSummary: true })}>
          Summarize
        </button>
        {status.hasSummary && (
          <SummarizeTranscript summary={transcript.summary} />
        )}
        <button
          onClick={() => setStatus({ ...status, hasDetectedTopic: true })}
        >
          Detect Topic
        </button>
        {status.hasDetectedTopic && <TopicDetection transcript={transcript} />}
      </Box>
    </>
  );
};

export default TranscriptSuccess;
