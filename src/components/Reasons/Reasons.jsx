import React from "react";

import {
  Box,
  Typography,
  Container,
  Grid,
  styled,
  Paper,
  getPaperUtilityClass,
} from "@mui/material";

import { theme } from "../../theme";
import vrImage from "../../assets/images/BoyWithPhone.png";
import ReasonCard from "../UI/ReasonCard";

const Reasons = () => {
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "auto",
  }));
  const StyledHeading = styled(Typography)(({ theme }) => ({
    fontSize: "30px",
    fontFamily: "Titillium Web",
    fontWeight: "700",
    marginTop: "20px",
    textTransform: "capitalize",
  }));

  const StyledSubtext = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontFamily: "Poppins",
    fontWeight: "400",
    textAlign: "center",
  }));
  const StyledReason = styled(Paper)(({ theme }) => ({
    borderRadius: "20px",
    fontSize: "18px",
    fontFamily: "Poppins",
  }));

  return (
    <StyledBox>
      <Container maxWidth="lg">
        <Box sx={{ color: "#fff", display: "grid", placeItems: "center" }}>
          <StyledHeading variant="h3">Why we built chirrpy</StyledHeading>
          <StyledSubtext variant="subtitle1">
            The voice recognition app you’ve always wanted
          </StyledSubtext>
        </Box>
        <Box>
          <img
            src={vrImage}
            alt="Young man speaking into hand-held phone"
            style={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ReasonCard
                text="Of the world’s population has some form of physical disability which
          prevents them from using the computer keyboard"
                data="15%"
                number="1"
              />
            </Grid>
            <Grid item xs={12}>
              <ReasonCard
                text="Repetitive Stress Injury (RSI)is a common workplace complaint caused by repetitive keyboard and mouse tasks"
                data="RSI"
                subText="Avoid"
                number="2"
              />
            </Grid>
            <Grid item xs={12}>
              <ReasonCard
                text="It is clear that voice input can offer a faster alternative to typing for many individuals. "
                data="3X"
                subText="Faster"
                number="3"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default Reasons;
