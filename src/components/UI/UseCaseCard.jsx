import { Box, Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import Btn from "./Button";

const UseCaseCard = ({ heading, details, image, alt, index, yellowCircle }) => {
  const StyledPaper = styled(Paper)(({ theme }) => ({
    border: "2px solid #881600",
    borderRadius: "20px",
    padding: "16px 16px",
    marginTop: "20px",
    marginBottom: "20px",
    [theme.breakpoints.up("sm")]: {
      position: "relative",
      zIndex: 2,
    },
  }));

  const StyledHeadingTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,

    fontSize: "30px",
    textTransform: "capitalize",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "10px",
      PaddingBottom: "15px",
      fontSize: "36px",
      textAlign: "center",
    },
  }));

  const StyledDetailsTypography = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    [theme.breakpoints.up("sm")]: {
      width: "70%",
      lineHeight: "30px",
      fontSize: "18px",
      paddingTop: "50px",
      paddingRight: "20%",
    },
  }));

  const StyledImage = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
  }));
  const StyledGridContainer = styled(Grid)(({ theme }) => ({
    direction: "column",
    [theme.breakpoints.up("sm")]: {
      direction: "row",
    },
  }));

  const StyledYellowCircleRight = styled("img")(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      position: "relative",
      left: "95%",
      top: "80px",
      zIndex: 1,
    },
  }));

  const StyledYellowCircleLeft = styled("img")(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      position: "relative",
      left: "-4%",
      top: "100px",
      zIndex: 1,
    },
  }));

  return (
    <>
      <Box sx={{ position: { sm: "relative" } }}>
        {index === 1 ? (
          <StyledYellowCircleLeft
            src={yellowCircle}
            width="10%"
            alt="Yellow circle behind use case card"
          />
        ) : (
          <StyledYellowCircleRight
            src={yellowCircle}
            width="10%"
            alt="Yellow circle behind use case card"
          />
        )}

        <StyledPaper>
          <StyledGridContainer container spacing={2}>
            {index === 1 ? (
              <>
                <Grid item sm={12}>
                  <StyledHeadingTypography variant="h3">
                    {heading}
                  </StyledHeadingTypography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledImage src={image} alt={alt} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ borderLeft: { sm: "1px solid #881600" } }}
                >
                  <StyledDetailsTypography variant="subTitle1">
                    {details}
                  </StyledDetailsTypography>
                  <Btn
                    text="Try for free"
                    variant="contained"
                    marginTop="30px"
                  />
                </Grid>
              </>
            ) : (
              <>
                <Grid item sm={12}>
                  <StyledHeadingTypography variant="h3">
                    {heading}
                  </StyledHeadingTypography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ borderRight: { sm: "1px solid #881600" } }}
                >
                  <StyledDetailsTypography variant="subTitle1">
                    {details}
                  </StyledDetailsTypography>
                  <Btn
                    text="Try for free"
                    variant="contained"
                    marginTop="30px"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledImage src={image} alt={alt} />
                </Grid>
              </>
            )}
          </StyledGridContainer>
        </StyledPaper>
      </Box>
    </>
  );
};

export default UseCaseCard;
