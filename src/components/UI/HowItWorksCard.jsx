import { Paper, Typography } from "@mui/material";
import React from "react";

const HowItWorksCard = ({ text, style }) => {
  return (
    <div>
      <Paper sx={style}>
        <Typography>{text}</Typography>
      </Paper>
    </div>
  );
};

export default HowItWorksCard;
