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
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: 300,

    h1: {
      fontSize: 56,
      lineHeight: 61,
      fontFamily: "Titillium Web",
    },
    h3: {
      fontSize: 36,
      fontWeight: 400,
      fontFamily: "Titillium Web",
    },
    h4: {
      fontSize: 30,
      fontFamily: "Titillium Web",
      fontWeight: 100,
      color: "#881600",
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
