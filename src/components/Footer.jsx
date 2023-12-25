import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Logo from "./Navbar/Logo";
import gitIcon from "../assets/images/gitIcon.png";

const Footer = () => {
  return (
    <Box sx={{ borderBottom: "10px solid green" }}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Logo />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={gitIcon}
              alt="gitHub link"
              style={{ width: "30px", height: "30px" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="subTitle1" sx={{ fontSize: "16px" }}>
              © 2023 Chirrpy. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
