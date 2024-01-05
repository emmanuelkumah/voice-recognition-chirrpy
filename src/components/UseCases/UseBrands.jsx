import { Box, Typography, styled, Stack, Grid } from "@mui/material";
import { theme } from "../../theme";
import { logos } from "../../componentData/data";

const UseBrands = () => {
  const StyledSectionBackground = styled(Box)(({ theme }) => ({
    background: theme.palette.primary.main,
    height: "auto",
    border: "10px solid #FFC801",
    borderRadius: "10px",
  }));

  const StyledLogo = styled("img")(({ theme }) => ({
    width: "50%",
    height: "50%",
    margin: "10px 10px",
    [theme.breakpoints.up("sm")]: {
      width: "130px",
      height: "100px",
    },
  }));

  const StyledHeading = styled(Typography)(({ theme }) => ({
    color: "white",
    fontSize: "30px",
    padding: "10px 10px",
    [theme.breakpoints.up("sm")]: {
      lineHeight: "37px",
      paddingTop: "23px",
      paddingLeft: "33px",
      paddingRight: "52%",
    },
  }));

  const StyledSubHeadingTypography = styled(Typography)(({ theme }) => ({
    color: "white",
    padding: "10px 10px",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "30px",
    },
  }));

  return (
    <>
      <StyledSectionBackground>
        <StyledHeading variant="h3">
          Providing Transcription Services To Empower Businesses
        </StyledHeading>
        <StyledSubHeadingTypography variant="body1">
          With Chirrpy, you do the talking, we take care of the rest
        </StyledSubHeadingTypography>
        <Grid container spacing={2}>
          {logos.map((logo) => (
            <Grid item xs={12} sm={3} key={logo} sx={{ marginBottom: "10px" }}>
              <StyledLogo src={logo} alt={logo} />
            </Grid>
          ))}
        </Grid>
      </StyledSectionBackground>
    </>
  );
};

export default UseBrands;
