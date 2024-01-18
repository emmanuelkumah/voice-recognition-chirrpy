import React from "react";

const TopicDetection = ({ transcript }) => {
  return (
    <div>
      <h2>Topics Detected</h2>
      {Object.keys(transcript.iab_categories_result.summary)
        .filter(
          (topic) => transcript.iab_categories_result.summary[topic] > 0.6
        )
        .map((topic) => (
          <p key={topic}>{topic.split(">").pop()}</p>
        ))}
    </div>
  );
};

export default TopicDetection;
