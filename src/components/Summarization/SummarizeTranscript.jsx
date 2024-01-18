import React from "react";

const SummarizeTranscript = ({ summary }) => {
  console.log(summary);
  return (
    <div>
      <h2>Transcript Summary</h2>
      {summary}
    </div>
  );
};

export default SummarizeTranscript;
