import { Paper, Typography, Container, Divider } from "@mui/material";

const SummarizeTranscript = ({ summary }) => {
  return (
    <>
      <Container>
        <Paper sx={{ padding: "20px" }}>
          <Typography variant="h4">Transcript Summary</Typography>
          <Divider />
          <Typography variant="body1">{summary}</Typography>
        </Paper>
      </Container>
    </>
  );
};

export default SummarizeTranscript;
