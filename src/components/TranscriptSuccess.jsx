import { Typography, Box, styled } from "@mui/material";
import { theme } from "../theme";
import React, { useState } from "react";
import Sentiment from "./Sentiment";

const TranscriptSuccess = ({ transcript }) => {
  const [hasSentiment, setHasSentiment] = useState(false);

  const handleShowSentiment = () => {
    setHasSentiment(true);
  };
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
        <button onClick={handleShowSentiment}>Show Sentiments</button>
        {hasSentiment && (
          <Sentiment
            sentimentAnalysis={transcript.sentiment_analysis_results}
          />
        )}
      </Box>
    </>
  );
};

export default TranscriptSuccess;
