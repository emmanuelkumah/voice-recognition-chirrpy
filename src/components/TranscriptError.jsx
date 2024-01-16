import React from "react";

const TranscriptError = ({ transcript }) => {
  return <div>{transcript.error && "Error Transcribing"}</div>;
};

export default TranscriptError;
