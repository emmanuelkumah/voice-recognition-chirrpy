import { Typography, Box, styled, Container } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import UseBrands from "./UseBrands";

const UseCases = () => {
  const StyledSectionBackground = styled(Box)(({ theme }) => ({
    background: theme.palette.secondary.main,
    height: "auto",
  }));

  return (
    <>
      <StyledSectionBackground>
        <Container>
          <Typography
            variant="h3"
            sx={{
              color: "primary.main",
              fontSize: "subHeading.fontSize",
              fontFamily: "subHeading.fontFamily",
              fontWeight: "subHeading.fontWeight",
              textAlign: "center",
              pt: { xs: "40px" },
            }}
          >
            Use Cases
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", py: { xs: "10px" } }}
          >
            How brands across the globe are using our voice recognition service
          </Typography>
          <UseBrands />
        </Container>
      </StyledSectionBackground>
    </>
  );
};

export default UseCases;
