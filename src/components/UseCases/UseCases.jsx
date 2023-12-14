import { Typography, Box, styled, Container, Stack } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import UseBrands from "./UseBrands";
import useCaseImage1 from "../../assets/images/case1.png";
import useCaseImage2 from "../../assets/images/case2.png";
import useCaseImage3 from "../../assets/images/case3.png";
import useCaseYellowCircle from "../../assets/images/useCaseYellowCircle.png";
import UseCaseCard from "../UI/UseCaseCard";

const UseCases = () => {
  const useCasesData = [
    {
      id: 1,
      heading: "Hands Free communication for People with Typing disabilities ",
      description: `Chirrpy eliminates the need for typing or handwriting, allowing individuals with physical disabilities that affect their hand movements to communicate and write more easily. 

        This can be particularly beneficial for those with conditions like arthritis, carpal tunnel syndrome, or spinal cord injuries.`,
      image: useCaseImage1,
      alt: "Young man working on the laptop",
      yellowCircleImg: useCaseYellowCircle,
    },
    {
      id: 2,
      heading: `Dictating Scripts and Podcasts`,
      description: `Chirrpy eliminates the need for typing or handwriting, allowing individuals with physical disabilities that affect their hand movements to communicate and write more easily. 

        This can be particularly beneficial for those with conditions like arthritis, carpal tunnel syndrome, or spinal cord injuries.`,
      image: useCaseImage2,
      alt: "Four young people  working together on the laptop ",
      yellowCircleImg: useCaseYellowCircle,
    },
    {
      id: 3,
      heading: `Record Meeting Notes Faster`,
      description: `Chirrpy  can significantly increase the speed at which note-takers can capture information. This is because speech is typically faster than typing, allowing note-takers to record more details and keep up with the flow of the speaker's remarks.

      It improves the accuracy of note-taking by reducing the risk of transcription errors. `,
      image: useCaseImage3,
      alt: "Young lady recording meeting notes with the computer",
      yellowCircleImg: useCaseYellowCircle,
    },
  ];
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
