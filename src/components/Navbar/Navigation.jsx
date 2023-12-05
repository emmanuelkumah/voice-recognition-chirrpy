import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Container,
  IconButton,
  Box,
  Toolbar,
  Menu,
  styled,
  MenuItem,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoIcon from "../../assets/images/birdIcon.png";
import { theme } from "../../theme";
import Logo from "./Logo";

const navItems = [
  "Home",
  "Why Chirrpy",
  "How It Works",
  "Use Case",
  "features",
];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleNavMenuOpen = (event) => {
    console.log(event.currentTarget);
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    height: "90px",

    [theme.breakpoints.up("sm")]: {
      height: "90px",
    },
  }));

  const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",

    [theme.breakpoints.up("sm")]: {
      gap: "515px",
    },
  }));

  const StyledNavMenu = styled(Box)(({ theme }) => ({
    fontFamily: "Titillium Web",
    fontWeight: 600,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "flex-end",
      color: "#0D090A",
      marginTop: "32px",
      fontWeight: 600,
    },
  }));
  const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "Titillium Web",
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {},
  }));
  const StyledMenu = styled(Menu)(({ theme }) => ({
    width: "100vw",
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static" sx={{ boxShadow: 0, bgcolor: "#FDF0D5" }}>
        <Container maxWidth="lg">
          <StyledToolBar disableGutters>
            <Logo />

            <StyledNavMenu>
              {navItems.map((item) => (
                <MenuItem key={item}>
                  <StyledTypography>{item}</StyledTypography>
                </MenuItem>
              ))}
            </StyledNavMenu>
          </StyledToolBar>
        </Container>
      </StyledAppBar>
    </Box>
  );
};

export default Navigation;
