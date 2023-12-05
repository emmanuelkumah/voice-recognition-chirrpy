import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import Btn from "../UI/Button";
import heroImage from "../../assets/images/heroImg.png";

const Hero = () => {
  const HeroContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    position: "relative",
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      height: "650px",
    },
  }));

  const StyledHeroHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontFamily: theme.typography.heading.fontFamily,
    fontSize: "45px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "56px",
      lineHeight: "61px",
      letterSpacing: "2.24px",
      paddingRight: "50px",
      marginTop: "58px",
      letter: "4%",
    },
  }));
  const StyledDescriptionBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      width: "502px",
      marginBottom: "42px",
    },
  }));
  const StyledHeroDescription = styled(Typography)(({ theme }) => ({
    lineHeight: "34.2px",
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Poppins",
      letterSpacing: "4%",
      marginTop: "24px",
    },
  }));

  const StyledButtonBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    marginTop: "1rem",
    [theme.breakpoints.up("md")]: {
      gap: "40px",
    },
  }));

  const StyledBlurBox = styled("div")(({ theme }) => ({
    position: "absolute",
    bottom: "30%",
    right: "10%",
    width: "100px",
    height: "100px",
    background: "#881600",
    borderRadius: "50%",
    filter: "blur(40px)",
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      top: "26%",
      right: "-10%",
      width: "400px",
      height: "400px",
      background: "#881600",
      borderRadius: "50%",
    },
  }));

  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box>
              <StyledHeroHeading variant="h2">
                Expand Accessibility Improve Productivity
              </StyledHeroHeading>
              <StyledDescriptionBox>
                <StyledHeroDescription variant="subtitle1">
                  Embrace the convenience of hands-free communication and
                  effortlessly transcribe your thoughts and ideas into written
                  form.
                </StyledHeroDescription>
              </StyledDescriptionBox>

              <StyledButtonBox>
                <Btn text="Try for free" variant="contained" />
                <Btn text="Watch Demo" variant="outlined" />
              </StyledButtonBox>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={heroImage}
              alt="Young lady with disability using the voice recognition app"
              style={{
                width: "100%",
              }}
            />
            <StyledBlurBox></StyledBlurBox>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
