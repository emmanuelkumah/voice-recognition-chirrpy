import React from "react";
import Highlighted from "./Highlighted";

const Sentiment = ({ sentimentAnalysis }) => {
  return (
    <div>
      <h2>Sentiment Analysis</h2>
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
