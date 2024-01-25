import { Button, Typography } from "@mui/material";
import React from "react";

const EmbedAudio = ({ audioDetails }) => {
  return (
    <>
      <Typography variant="body1" sx={{ color: "#fff", marginBottom: "20px" }}>
        Listen to the recorded speech
      </Typography>
      <audio controls src={audioDetails.url}></audio>
    </>
  );
};

export default EmbedAudio;
