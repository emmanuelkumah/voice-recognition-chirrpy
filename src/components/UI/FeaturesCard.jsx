import { Paper, Typography, Stack, styled } from "@mui/material";
import React from "react";

const FeaturesCard = ({ item }) => {
  const StyledIcon = styled("img")(({ theme }) => ({
    width: "20%",
    [theme.breakpoints.up("sm")]: {
      width: "60px",
      height: "60px",
    },
  }));
  const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.heading.fontFamily,
    fontSize: "30px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
      fontWeight: theme.typography.heading.fontWeight,
    },
  }));

  const StyledPaper = styled(Paper)(({ theme }) => ({
    borderRadius: "20px",
    padding: "1rem",
  }));

  return (
    <>
      <StyledPaper>
        <Stack direction="row" spacing={2}>
          <StyledIcon src={item.imageUrl} alt={item.description} />
          <Typography variant="body1">{item.description}</Typography>
        </Stack>
      </StyledPaper>
    </>
  );
};

export default FeaturesCard;
