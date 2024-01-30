import { Typography } from "@mui/material";
import React from "react";

const TranscriptError = ({ transcript }) => {
  return (
    <div>
      {transcript.error && (
        <Typography variant="body1">
          Error transcribing speech to text
        </Typography>
      )}
    </div>
  );
};

export default TranscriptError;
