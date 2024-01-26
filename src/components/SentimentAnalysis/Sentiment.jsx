import React from "react";
import Highlighted from "./Highlighted";
import { Container, Divider, Paper, Typography } from "@mui/material";

const Sentiment = ({ sentimentAnalysis }) => {
  return (
    <div>
      <Container>
        <Paper sx={{ padding: "20px", maxHeight: "500px", overflow: "auto" }}>
          <Typography variant="h4" sx={{ paddingBottom: "10px" }}>
            Highlighted Sentiments
          </Typography>
          <Divider light />
          {sentimentAnalysis.map((result) => (
            <Highlighted
              key={result.text}
              text={result.text}
              sentiment={result.sentiment}
            />
          ))}
        </Paper>
      </Container>
    </div>
  );
};

export default Sentiment;
