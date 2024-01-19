import { Typography } from "@mui/material";
import React from "react";

const EmbedAudio = ({ audioDetails }) => {
  return (
    <>
      <Typography
        variant="body1"
        sx={{ color: "#3C153B", marginBottom: "20px" }}
      >
        Listen to the recorded audio
      </Typography>
      <audio controls src={audioDetails.url}></audio>
    </>
  );
};

export default EmbedAudio;
