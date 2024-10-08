import {
  Box,
  CardMedia,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { theme } from "../../../theme";
import Btn from "../../UI/Button";
import heroImage from "../../../assets/images/heroImg.png";

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
    fontSize: "45px",
    lineHeight: "40px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "56px",
      lineHeight: "61px",
      letterSpacing: "2.24px",
      paddingRight: "150px",
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
    lineHeight: "30.2px",
    marginTop: "24px",

    [theme.breakpoints.up("sm")]: {
      letterSpacing: "4%",
    },
  }));

  const StyledButtonBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
    [theme.breakpoints.up("md")]: {
      gap: "40px",
    },
  }));

  const StyledBlurBackground = styled(CardMedia)(() => ({
    position: "absolute",
    top: "35%",
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      top: "-40%",
      left: "60%",
    },
  }));

  return (
    <HeroContainer id="home">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box>
              <StyledHeroHeading variant="h1">
                Expand Accessibility Improve Productivity
              </StyledHeroHeading>
              <StyledDescriptionBox>
                <StyledHeroDescription variant="body1">
                  Embrace the convenience of hands-free communication and
                  effortlessly transcribe your thoughts and ideas into written
                  form.
                </StyledHeroDescription>
              </StyledDescriptionBox>

              <StyledButtonBox>
                <Btn text="Try for free" variant="contained" />
              </StyledButtonBox>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ position: "relative" }}>
            <img
              src={heroImage}
              alt="Young lady with disability using the voice recognition app"
              style={{
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
