import { Box, Stack, Typography, styled } from "@mui/material";
import useCaseImage1 from "../../assets/images/case1.png";
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
          <Box>
            <StyledHeadingTypogrpahy variant="h3">
              Hands Free communication for People with Typing disabilities
            </StyledHeadingTypogrpahy>
            <StyledDetailsTypography>
              Chirrpy eliminates the need for typing or handwriting, allowing
              individuals with physical disabilities that affect their hand
              movements to communicate and write more easily. This can be
              particularly beneficial for those with conditions like arthritis,
              carpal tunnel syndrome, or spinal cord injuries.
            </StyledDetailsTypography>
            <Button text="Try for free" variant="contained" />

            <img src={useCaseImage1} alt="A young man typing on the laptop" />
          </Box>
        </StyledStack>
      </StyledBox>
    </>
  );
};

export default Case1;
