import React from "react";
import { Typography } from "@mui/material";
import Highlighted from "./Highlighted";
const Results = ({ transcript }) => {
  return (
    <>
      <Typography variant="body1">
        {transcript.sentiment_analysis_results.map((result) => (
          <Highlighted text={result.text} sentiment={result.sentiment} />
        ))}
      </Typography>
    </>
  );
};

export default Results;
