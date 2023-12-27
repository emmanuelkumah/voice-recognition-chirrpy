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
import { theme } from "../../theme";
import { navItems } from "../../componentData/data";
import Logo from "./Logo";

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
    height: "80px",

    [theme.breakpoints.up("sm")]: {},
  }));

  const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",

    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
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
      fontWeight: 600,
    },
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
                  <Typography variant="navItems">{item}</Typography>
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
