import { Typography, Box, Container, Grid, styled } from "@mui/material";
import { theme } from "../../../theme";
import FeaturesCard from "../../UI/FeaturesCard";
import { featuresData } from "../../../componentData/data";

const Features = () => {
  const StyledSectionBackground = styled(Box)(({ theme }) => ({
    background: theme.palette.primary.main,
    paddingBottom: "2rem",
  }));

  return (
    <>
      <StyledSectionBackground id="features">
        <Container>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              textAlign: "center",
              paddingTop: "2rem",
            }}
          >
            Features
          </Typography>
          <Typography
            variant="subTitle1"
            sx={{
              color: "#fff",
              display: "grid",
              placeItems: "center",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            What is under the hood of our voice recognition service
          </Typography>
          <Grid container spacing={2}>
            {featuresData.map((item) => (
              <Grid item xs={12} sm={3} key={item.id}>
                <FeaturesCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledSectionBackground>
    </>
  );
};

export default Features;
