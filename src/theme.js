import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#881600",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FDF0D5",
      contrastText: "#881600",
    },
  },
  typography: {
    fontFamily: "Poppins Titillium Web cursive",
    fontSize: 16,
    fontWeight: 400,

    h1: {
      fontSize: 56,
      lineHeight: 61,
      fontFamily: "Titillium Web",
    },
    h3: {
      fontSize: 36,
      fontWeight: 700,
      fontFamily: "Titillium Web",
    },
    subHeading: {
      fontSize: 36,
      fontWeight: 700,
      fontFamily: "Titillium Web",
    },
    body1: {
      fontFamily: "Poppins",
    },
    navItems: {
      fontSize: "18px",
      fontFamily: "Titillium Web",
      fontWeight: 600,
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  },
});
