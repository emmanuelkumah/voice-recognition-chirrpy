import { Box, styled } from "@mui/material";
import chirrpyLogo from "../../assets/images/chirrpyLogo.png";

const Logo = () => {
  const StyledLogo = styled("img")(() => ({
    width: "158px",
  }));

  return (
    <>
      <Box component="a">
        <StyledLogo src={chirrpyLogo} alt="Chirrpy logo" />
      </Box>
    </>
  );
};

export default Logo;
