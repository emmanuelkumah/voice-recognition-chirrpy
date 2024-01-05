import { Typography, Box, styled, Container, Stack } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import UseBrands from "./UseBrands";
import { useCasesData } from "../../componentData/data";

import UseCaseCard from "../UI/UseCaseCard";

const UseCases = () => {
  const StyledSectionBackground = styled(Box)(({ theme }) => ({
    background: theme.palette.secondary.main,
    height: "auto",
  }));

  return (
    <>
      <StyledSectionBackground>
        <Container sx={{ pt: "2rem" }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              paddingTop: "30px",
              color: theme.palette.primary.main,
            }}
          >
            Use Cases
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", py: { xs: "18px" } }}
          >
            How brands across the globe are using our voice recognition service
          </Typography>
          <UseBrands />
          <Stack>
            {useCasesData.map((useCase, index) => (
              <UseCaseCard
                key={useCase.id}
                heading={useCase.heading}
                details={useCase.description}
                image={useCase.image}
                alt={useCase.alt}
                index={index}
                yellowCircle={useCase.yellowCircleImg}
              />
            ))}
          </Stack>
        </Container>
      </StyledSectionBackground>
    </>
  );
};

export default UseCases;
