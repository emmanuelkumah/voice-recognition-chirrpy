import React from "react";
import { Typography, Box, styled, Container, Grid, Paper } from "@mui/material";
import { theme } from "../../../theme";
import { howItWorksData } from "../../../componentData/data";

const HowItWorks = () => {
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
            align="center"
            sx={{
              paddingTop: "30px",
              color: theme.palette.primary.main,
            }}
          >
            How It Works
          </Typography>
          <Typography variant="body1" align="center">
            Swift actions, better results
          </Typography>
          <Grid
            container
            sx={{ flexGrow: 1, position: "relative", paddingBottom: "20px" }}
          >
            {howItWorksData.map((item) => (
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
