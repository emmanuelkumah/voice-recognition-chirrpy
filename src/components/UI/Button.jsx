import React from "react";

import { Button, styled } from "@mui/material";
import { theme } from "../../theme";
import { Link } from "react-router-dom";

const Btn = ({ text, variant, marginTop }) => {
  const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: "50px",
    height: "54px",
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontWeight: "600",
    width: "100%",
    marginTop: marginTop,
    [theme.breakpoints.up("sm")]: {
      width: "200px",
    },
  }));
  return (
    <div>
      <Link to="/app">
        <StyledButton variant={variant} disableElevation>
          {text}
        </StyledButton>
      </Link>
    </div>
  );
};

export default Btn;
