import React from "react";

import {
  Box,
  Typography,
  Container,
  Grid,
  styled,
  Paper,
  getPaperUtilityClass,
  Stack,
  CardMedia,
} from "@mui/material";

import { theme } from "../../theme";
import vrImage from "../../assets/images/boyWithPhone.jpeg";
import bigEllipse from "../../assets/images/ellipse.png";
import blurYellow from "../../assets/images/blurYellow.png";
import ReasonCard from "../UI/ReasonCard";

const Reasons = () => {
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "auto",
    [theme.breakpoints.up("sm")]: {
      position: "relative",
    },
  }));

  const StyledImage = styled(CardMedia)(() => ({
    borderRadius: "20px",
    marginTop: "20px",
    marginBottom: "20px",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      width: "425px",
      height: "473px",
      marginTop: "40px",
      marginBottom: "34px",
    },
  }));

  const StyledEllipse = styled(CardMedia)(() => ({
    width: "60px",
    height: "60px",
    position: "absolute",
    left: "0%",
    top: "4%",
    [theme.breakpoints.up("sm")]: {
      top: "6%",
      left: "-1%",
    },
  }));
  const StyledYellowBlurLeft = styled(CardMedia)(() => ({
    position: "absolute",
    left: "0%",
    top: "4%",
    [theme.breakpoints.up("sm")]: {
      top: "-4%",
      left: "-25%",
    },
  }));
  const StyledYellowBlurRight = styled(CardMedia)(() => ({
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      position: "absolute",
      top: "0.5%",
      right: "0%",
      transform: "rotate(180deg)",
      width: "30%",
      height: "100%",
    },
  }));
  const StyledHeading = styled(Typography)(({ theme }) => ({
    fontSize: "30px",
    fontFamily: "Titillium Web",
    fontWeight: "700",
    marginTop: "20px",
    textTransform: "capitalize",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "19px",
      fontSize: "36px",
    },
  }));

  const StyledSubtext = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontFamily: "Poppins",
    fontWeight: "400",
    textAlign: "center",
  }));

  const StyledReasonTwo = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      position: "relative",
      left: "30%",
      width: "fit-content",
    },
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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} sx={{ position: "relative" }}>
            <StyledEllipse
              component="img"
              image={bigEllipse}
              alt="Small yellow circle"
            />
            <StyledImage
              component="img"
              height="auto"
              image={vrImage}
              alt="Young man speaking into hand-held phone"
            />
            <StyledYellowBlurLeft
              component="img"
              image={blurYellow}
              alt="Yellow blur background over boy with phone"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
              <Grid container spacing={5} direction="column">
                <Grid item xs={12} sm={6}>
                  <ReasonCard
                    text="Of the world’s population has some form of physical disability which
          prevents them from using the computer keyboard"
                    data="15%"
                    number="1"
                  />
                </Grid>
                <StyledReasonTwo item xs={12} sm={6}>
                  <ReasonCard
                    text="Repetitive Stress Injury (RSI)is a common workplace complaint caused by repetitive keyboard and mouse tasks"
                    data="RSI"
                    subText="Avoid"
                    number="2"
                  />
                </StyledReasonTwo>
                <Grid item xs={12} sm={6}>
                  <ReasonCard
                    text="It is clear that voice input can offer a faster alternative to typing for many individuals. "
                    data="3X"
                    subText="Faster"
                    number="3"
                  />
                </Grid>
              </Grid>
              <StyledYellowBlurRight
                component="img"
                image={blurYellow}
                alt="Yellow blur background on the right of the screen"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default Reasons;
