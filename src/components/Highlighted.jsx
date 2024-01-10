import React from "react";
import { Box, Typography } from "@mui/material";

const sentimentColor = {
  POSITIVE: "lightgreen",
  NEGATIVE: "pink",
  NEUTRAL: "lightgray",
};

const Highlighted = ({ text, sentiment }) => {
  return (
    <>
      <Box>
        <Typography
          variant="body1"
          sx={{ backgroundColor: sentimentColor[sentiment] }}
        >
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default Highlighted;
