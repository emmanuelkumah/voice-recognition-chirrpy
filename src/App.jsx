import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import "./audio-recorder.css";
import Logo from "./components/HomeScreen/Navbar/Logo";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  LinearProgress,
  styled,
  Backdrop,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import EmbedAudio from "./components/EmbedAudio";
import TranscriptSuccess from "./components/Transcript/TranscriptSuccess";
import TranscriptError from "./components/Transcript/TranscriptError";
import { yellow } from "@mui/material/colors";

const assemblyAPI = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: import.meta.env.VITE_API_KEY,
    "content-Type": "application/json",
  },
});

const INITIAL_STATE = {
  blob: "",
  url: "",
  hasBlob: false,
  open: false,
};
const App = () => {
  const [audioDetails, setAudioDetails] = useState(INITIAL_STATE);
  const [transcript, setTranscript] = useState({
    id: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const recorderControls = useAudioRecorder();

  useEffect(() => {
    const interval = setInterval(async () => {
      if (transcript.id && transcript.status !== "completed" && isLoading) {
        try {
          const { data: transcriptData } = await assemblyAPI.get(
            `/transcript/${transcript.id}`
          );
          setTranscript({ ...transcript, ...transcriptData });
          console.log(transcript);
        } catch (error) {
          console.error(error);
        }
      } else {
        setIsLoading(false);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isLoading, transcript]);

  //styling
  const customClasses = {
    container: "audio-recorder",
  };
  const StyledBoxContainer = styled(Box)(({ theme }) => ({
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      border: "1px solid red",
    },
  }));
  const StyledBtn = styled(Button)(({ theme }) => ({
    textTransform: "capitalize",
    fontFamily: "Poppins",
    borderRadius: "10px",
    size: "small",
  }));

  const displayAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    setAudioDetails({ ...audioDetails, url: url, hasBlob: true, open: true });
    setOpen(true);
  };
  const handleAudioStop = (data) => {
    setAudioDetails(data);
  };

  const handleAudioUpload = async (audioFile) => {
    setOpen(false);
    const { data: uploadResponse } = await assemblyAPI.post(
      "/upload",
      audioFile
    );
    const { data } = await assemblyAPI.post("/transcript", {
      audio_url: uploadResponse.upload_url,
      sentiment_analysis: true,
      entity_detection: true,
      iab_categories: true,
      summarization: true,
      summary_model: "informative",
      summary_type: "paragraph",
    });
    setTranscript({ id: data.id });
    setIsLoading(true);
  };

  const handleReset = () => {
    setOpen(false);
    setAudioDetails({ ...INITIAL_STATE });
    setTranscript({ id: "" });
  };

  const handleStopRecording = () => {
    // setOpenModal(true);

    recorderControls.stopRecording;
  };

  return (
    <div className="App">
      <Box>
        <Container maxWidth="lg">
          <Logo />
          <section>
            <Typography
              variant="h4"
              sx={{ paddingTop: "30px", paddingBottom: "30px" }}
            >
              Howdy! 👋🏾, let's trancribe your speech into accurate text using
              our AI
            </Typography>

            <AudioRecorder
              onRecordingComplete={(blob) => displayAudioElement(blob)}
              recorderControls={recorderControls}
              showVisualizer={true}
              classes={{
                AudioRecorderStartSaveClass: "audio-recorder-svg-color",
                AudioRecorderPauseResumeClass: "audio-recorder-svg-color",
                AudioRecorderDiscardClass: "audio-recorder-svg-color",
                AudioRecorderClass: "audio-container",
              }}
            />
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", marginTop: "20px" }}
            >
              To start, click on the "start recording" button or the microphone
              icon 🎙️
            </Typography>
            <Stack direction="row" spacing={3} sx={{ marginTop: "20px" }}>
              <Button
                variant="contained"
                disableElevation
                size="small"
                onClick={recorderControls.startRecording}
                sx={{
                  borderRadius: "10px",
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                  padding: "5px 15px",
                }}
              >
                Start recording
              </Button>

              <Button
                variant="outlined"
                size="small"
                onClick={recorderControls.stopRecording}
                sx={{
                  borderRadius: "10px",
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                  padding: "5px 15px",
                }}
              >
                Stop recording
              </Button>
            </Stack>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                Listen to the recorded speech 🎧
              </DialogTitle>
              <DialogContent>
                <EmbedAudio audioDetails={audioDetails} />
              </DialogContent>
              <DialogActions>
                <Stack direction="row" spacing={2}>
                  <StyledBtn
                    variant="contained"
                    onClick={() =>
                      handleAudioUpload(recorderControls.recordingBlob)
                    }
                  >
                    Transcribe
                  </StyledBtn>
                  <StyledBtn variant="outlined" onClick={handleReset}>
                    Reset
                  </StyledBtn>
                </Stack>
              </DialogActions>
            </Dialog>

            {transcript.status === "completed" ? (
              <TranscriptSuccess transcript={transcript} />
            ) : (
              isLoading && (
                <Box sx={{ width: "100%", marginTop: "40px" }}>
                  <LinearProgress />
                </Box>
              )
            )}
          </section>
        </Container>
      </Box>
    </div>
  );
};

export default App;
