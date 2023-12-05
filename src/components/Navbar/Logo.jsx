import { Box, Typography, styled } from "@mui/material";
import birdIcon from "../../assets/images/birdChirrpy.png";
import React from "react";
import { theme } from "../../theme";

const Logo = () => {
  const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    color: "#881600",
  }));
  const StyledLogo = styled(Typography)(({ theme }) => ({
    fontFamily: "Monomaniac One",
    fontSize: "40px",
    fontWeight: "400",
    color: "#881600",
    marginTop: "7px",
    position: "absolute",
    left: "33px",
  }));
  const StyledLogo2 = styled(Typography)(({ theme }) => ({
    fontFamily: "Mogra",
    fontSize: "40px",
    fontWeight: "400",
    color: "#881600",
    marginTop: "7px",
    position: "absolute",
    top: "8px",
    left: "113px",
  }));

  return (
    <>
      <Box sx={{ display: "flex", position: "relative" }}>
        <img
          src={birdIcon}
          alt="icon of a bird"
          style={{ width: "40px", height: "40px", marginTop: "19px" }}
        />
        <StyledBox>
          <StyledLogo>Chirr</StyledLogo>
          <StyledLogo2>py</StyledLogo2>
        </StyledBox>
      </Box>
    </>
  );
};

export default Logo;
