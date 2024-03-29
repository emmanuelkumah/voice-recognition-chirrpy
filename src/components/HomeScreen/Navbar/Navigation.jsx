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
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "../../../theme";
import { navItems } from "../../../componentData/data";
import { HashLink } from "react-router-hash-link";

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
    cursor: "pointer",
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
                <HashLink smooth to={item.to}>
                  <Button key={item.id}>
                    <Typography variant="navItems">{item.menu}</Typography>
                  </Button>
                </HashLink>
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
                {navItems.map((item) => (
                  <HashLink to={item.to}>
                    <Button>
                      <MenuItem
                        onClick={handleCloseNavMenu}
                        sx={{ width: "90vw" }}
                        key={item.id}
                      >
                        <Typography textAlign="center" variant="navItems">
                          {item.menu}
                        </Typography>
                      </MenuItem>
                    </Button>
                  </HashLink>
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
