import { Paper, Typography, Stack, styled } from "@mui/material";
import React from "react";
import { theme } from "../../theme";

const ReasonCard = ({ data, text, supText, number }) => {
  const StyledCard = styled(Paper)(({ theme }) => ({
    borderRadius: "10px",
    marginTop: "5px",
    marginBottom: "5px",
    position: "relative",
    boxShadow: "4px 4px 4px 0px #00000040",

    [theme.breakpoints.up("sm")]: {
      width: "339px",
      height: "109px",
    },
  }));

  const StyledStack = styled(Stack)(({ theme }) => ({
    padding: "1rem",
  }));
  const StyledData = styled(Typography)(({ theme }) => ({
    fontSize: "60px",
    color: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      fontSize: "43px",
    },
  }));

  const StyledReason = styled(Typography)(({ theme }) => ({
    fontSize: "13px",
    color: "#0D090A",
    [theme.breakpoints.up("sm")]: {
      fontSize: "12px",
    },
  }));
  const StyledSubText = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: theme.palette.primary.main,
    position: "absolute",
    left: "10%",
  }));
  const StyledDiv = styled("div")(() => ({
    backgroundColor: "#FFC801",
    borderRadius: "50%",
    height: "30px",
    width: "30px",
    position: "absolute",
    top: "-10%",
    [theme.breakpoints.up("sm")]: {
      left: "4%",
    },
  }));

  return (
    <div>
      <StyledCard>
        <StyledDiv>
          <Typography variant="body1" align="center">
            {number}
          </Typography>
        </StyledDiv>
        <StyledStack direction="row" spacing={2}>
          <StyledSubText>{supText}</StyledSubText>
          <StyledData align="center">{data}</StyledData>
          <StyledReason variant="body1">{text}</StyledReason>
        </StyledStack>
      </StyledCard>
    </div>
  );
};

export default ReasonCard;
