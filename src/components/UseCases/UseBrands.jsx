import { Box, Typography, styled, Stack, Grid } from "@mui/material";
import { theme } from "../../theme";
import givingLogo from "../../assets/images/giving.png";
import unity from "../../assets/images/unityLogo.png";
import sweetHomeLogo from "../../assets/images/sweethome.png";
import helpingHandLogo from "../../assets/images/helpingHand.png";
import communities from "../../assets/images/communities.png";
const UseBrands = () => {
  const logo = [sweetHomeLogo, givingLogo, unity, helpingHandLogo, communities];

  const StyledSectionBackground = styled(Box)(({ theme }) => ({
    background: theme.palette.primary.main,
    height: "auto",
    border: "10px solid #FFC801",
    borderRadius: "10px",
  }));

  const StyledLogo = styled("img")(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      width: "10%",
      height: "10%",
    },
  }));
  const StyledStack = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      direction: "row",
      display: "flex",
      justifyContent: "space-evenly",
      paddingTop: "5%",
    },
  }));
  const StyledHeading = styled(Typography)(({ theme }) => ({
    color: "white",
    [theme.breakpoints.up("sm")]: {
      fontFamily: theme.typography.heading.fontFamily,
      fontWeight: theme.typography.heading.fontWeight,
      fontSize: "36px",
      lineHeight: "37px",
      paddingTop: "23px",
      paddingLeft: "33px",
      paddingRight: "52%",
    },
  }));

  return (
    <>
      <StyledSectionBackground>
        <StyledHeading variant="h3">
          Providing Transcription Services To Empower Businesses
        </StyledHeading>
        <Typography sx={{ color: "white", paddingLeft: { xs: "33px" } }}>
          With Chirrpy, you do the talking, we take care of the rest
        </Typography>
        <StyledStack direction="row">
          {logo.map((logo) => (
            <StyledLogo src={logo} key={logo} />
          ))}
        </StyledStack>
      </StyledSectionBackground>
    </>
  );
};

export default UseBrands;
