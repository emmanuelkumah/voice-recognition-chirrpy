import { Box, Stack, Typography, styled } from "@mui/material";
import useCaseImage2 from "../../assets/images/case2.png";
import { theme } from "../../theme";
import Button from "../../components/UI/Button";

const Case2 = () => {
  const StyledBox = styled(Box)(({ theme }) => ({
    background: "#fff",
    border: "2px solid #881600 ",
    borderRadius: "10px",
    marginTop: "30px",
    [theme.breakpoints.up("sm")]: {},
  }));

  const StyledStack = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      direction: "row",
    },
  }));
  const StyledHeadingTypogrpahy = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.heading.fontFamily,
    fontWeight: theme.typography.heading.fontWeight,
    fontSize: "30px",
    padding: "16px",
    color: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      direction: "row",
    },
  }));

  const StyledDetailsTypography = styled(Typography)(({ theme }) => ({
    padding: "16px",
    [theme.breakpoints.up("sm")]: {
      direction: "row",
    },
  }));
  return (
    <>
      <StyledBox>
        <StyledStack>
          <img
            src={useCaseImage2}
            alt="Four Young people collaboration on a laptop"
          />

          <StyledHeadingTypogrpahy variant="h3">
            Dictating Scripts and Podcasts{" "}
          </StyledHeadingTypogrpahy>
          <StyledDetailsTypography>
            Chirrpy can be used to dictate scripts for videos, podcasts, and
            other audio-visual content. This can save content creators a
            significant amount of time, as they can simply speak their ideas
            into the app and have them transcribed into text.
          </StyledDetailsTypography>
          <Button text="Try for free" variant="contained" />
        </StyledStack>
      </StyledBox>
    </>
  );
};

export default Case2;
