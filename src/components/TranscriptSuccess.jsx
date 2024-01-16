import { Typography, Box, styled } from "@mui/material";
import { theme } from "../theme";
import React from "react";

const TranscriptSuccess = ({ transcript }) => {
  const StyledBox = styled(Box)(({ theme }) => ({
    background: theme.palette.secondary.main,
    height: "auto",
  }));
  return (
    <StyledBox>
      <Typography variant="body1">{transcript.text}</Typography>
    </StyledBox>
  );
};

export default TranscriptSuccess;
