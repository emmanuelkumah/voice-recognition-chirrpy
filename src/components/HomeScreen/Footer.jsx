import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Logo from "./Navbar/Logo";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Logo />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="subTitle1"
              sx={{
                display: "flex",
                paddingTop: { xs: "none", sm: "20px" },
                justifyContent: { xs: "flex-start", sm: "flex-end" },
              }}
            >
              © 2023 Chirrpy. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
