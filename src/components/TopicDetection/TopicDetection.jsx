import { Paper, Typography, Container, Divider } from "@mui/material";
import React from "react";

const TopicDetection = ({ transcript }) => {
  return (
    <>
      <Container>
        <Paper sx={{ padding: "20px" }}>
          <Typography variant="h4">Detected Topic</Typography>
          <Divider />
          {Object.keys(transcript.iab_categories_result.summary)
            .filter(
              (topic) => transcript.iab_categories_result.summary[topic] > 0.6
            )
            .map((topic) => (
              <Typography variant="body1" key={topic}>
                {topic.split(">").pop()}
              </Typography>
            ))}
        </Paper>
      </Container>
    </>
  );
};

export default TopicDetection;
