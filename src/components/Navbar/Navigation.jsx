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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "../../theme";
import { navItems } from "../../componentData/data";
import Logo from "./Logo";

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleNavMenuOpen = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    height: "80px",
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
            {/* Responsive menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: { xs: "flex-end", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleNavMenuOpen}
              >
                <MenuIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  position: "absolute",
                  top: "60px",
                }}
              >
                {navItems.map((menu) => (
                  <MenuItem
                    key={menu}
                    onClick={handleCloseNavMenu}
                    sx={{ width: "100vw" }}
                  >
                    <Typography textAlign="center" variant="navItems">
                      {menu}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </StyledToolBar>
        </Container>
      </StyledAppBar>
    </Box>
  );
};

export default Navigation;
