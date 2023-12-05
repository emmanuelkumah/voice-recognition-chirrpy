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
    logo: {
      fontSize: 40,
      fontFamily: "Monomaniac One",
    },
    heading: {
      fontSize: 56,
      fontWeight: 700,
      lineHeight: 61,
      fontFamily: "Titillium Web",
    },
    subHeading: {
      fontSize: 36,
      fontWeight: 700,
      fontFamily: "Titillium Web",
    },
    body: {
      fontSize: 18,
      fontWeight: 400,
      fontFamily: "Poppins",
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
