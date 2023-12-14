import { Box, Stack, Typography, styled } from "@mui/material";
import useCaseImage3 from "../../assets/images/case3.png";
import { theme } from "../../theme";
import Button from "../../components/UI/Button";

const Case1 = () => {
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
          <StyledHeadingTypogrpahy variant="h3">
            Record Meeting Notes Faster
          </StyledHeadingTypogrpahy>
          <StyledDetailsTypography>
            Chirrpy can significantly increase the speed at which note-takers
            can capture information. This is because speech is typically faster
            than typing, allowing note-takers to record more details and keep up
            with the flow of the speaker's remarks. It improves the accuracy of
            note-taking by reducing the risk of transcription errors.
          </StyledDetailsTypography>
          <Button text="Try for free" variant="contained" />

          <img src={useCaseImage3} alt="A young man typing on the laptop" />
        </StyledStack>
      </StyledBox>
    </>
  );
};

export default Case1;
