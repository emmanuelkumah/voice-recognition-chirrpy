import React from "react";
import { Typography, Box, styled, Container, Grid, Paper } from "@mui/material";
import { theme } from "../../theme";
import icon from "../../assets/images/icon.png";

const HowItWorks = () => {
  const data = [
    {
      id: 1,
      bgColor: "#6A381F",
      text: "Click on the mic icon to start recording or upload an audio file from you device",
      icon,
      radius: "10px 0px 0px 10px",
    },
    {
      id: 2,
      bgColor: "#774E24",
      text: "Transcribe your voice to text using our AI powered voice recognition software ",
      icon,
      radius: "0px",
    },
    {
      id: 3,
      bgColor: "#A5907E",
      text: "Perform preferred actions on the output and finally download the text ",
      icon,
      radius: "0px 10px 10px 0px",
    },
  ];

  const commonTypographyStyles = {
    display: "grid",
    placeItems: "center",
    padding: "38px 54px 38px 43px",
    lineHeight: "28.8px",
  };

  const StyledSectionBackground = styled(Box)(({ theme }) => ({
    background: theme.palette.secondary.main,
    height: "auto",
  }));

  const StyledIcon = styled("img")(() => ({
    position: "relative",
    left: "40%",
    top: "15%",
  }));

  return (
    <>
      <StyledSectionBackground>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              display: "grid",
              placeItems: "center",
              paddingTop: "30px",
              fontFamily: theme.typography.heading.fontFamily,
              fontSize: "36px",
              color: theme.palette.primary.main,
              fontWeight: "700",
            }}
          >
            How It Works
          </Typography>
          <Typography
            sx={{
              display: "grid",
              placeItems: "center",
              lineHeight: "28.8px",
            }}
          >
            Swift actions, better results
          </Typography>
          <Grid container sx={{ flexGrow: 1, position: "relative" }}>
            {data.map((item) => (
              <Grid item xs={12} sm={4} key={item.id}>
                <StyledIcon src={item.icon} />
                <Paper
                  square
                  sx={{
                    background: item.bgColor,
                    height: 176,
                    color: "#fff",
                    borderRadius: item.radius,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      ...commonTypographyStyles,
                    }}
                  >
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledSectionBackground>
    </>
  );
};

export default HowItWorks;
