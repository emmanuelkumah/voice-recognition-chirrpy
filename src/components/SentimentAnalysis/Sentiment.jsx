import React from "react";
import Highlighted from "./Highlighted";

const Sentiment = ({ sentimentAnalysis }) => {
  return (
    <div>
      {sentimentAnalysis.map((result) => (
        <Highlighted
          key={result.text}
          text={result.text}
          sentiment={result.sentiment}
        />
      ))}
    </div>
  );
};

export default Sentiment;
