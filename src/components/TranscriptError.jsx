import React from "react";

const TranscriptError = ({ transcript }) => {
  return <div>{transcript.error ? "Error Transcribing" : "Try again"}</div>;
};

export default TranscriptError;
