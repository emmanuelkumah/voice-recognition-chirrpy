import { Typography, Box, Container, Grid, styled } from "@mui/material";
import { theme } from "../../theme";
import FeaturesCard from "../UI/FeaturesCard";
import { featuresData } from "../../componentData/data";

const Features = () => {
  const StyledSectionBackground = styled(Box)(({ theme }) => ({
    background: theme.palette.primary.main,
    paddingBottom: "2rem",
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: "#fff",
    fontFamily: theme.typography.heading.fontFamily,
    fontSize: theme.typography.subHeading.fontSize,
    fontWeight: theme.typography.heading.fontWeight,
    textAlign: "center",
    paddingTop: "2rem",
    paddingBottom: "1rem",
  }));

  const StyledDescription = styled(Typography)(({ theme }) => ({
    color: "#fff",
    display: "grid",
    placeItems: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  }));

  return (
    <>
      <StyledSectionBackground>
        <Container>
          <StyledTypography variant="h3">Features</StyledTypography>
          <StyledDescription variant="subTitle1">
            What is under the hood of our voice recognition service
          </StyledDescription>
          <Grid container spacing={2}>
            {featuresData.map((item) => (
              <Grid item xs={12} sm={3}>
                <FeaturesCard item={item} key={item.id} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledSectionBackground>
    </>
  );
};

export default Features;
