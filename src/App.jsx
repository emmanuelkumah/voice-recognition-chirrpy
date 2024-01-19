import { useState } from "react";
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
  styled,
} from "@mui/material";
import EmbedAudio from "./components/EmbedAudio";
import TranscriptSuccess from "./components/Transcript/TranscriptSuccess";
import TranscriptError from "./components/Transcript/TranscriptError";

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
};
const App = () => {
  const [transcript, setTranscript] = useState({
    id: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcriptError, setTranscriptError] = useState("");

  //new states
  const [audioDetails, setAudioDetails] = useState(INITIAL_STATE);

  const recorderControls = useAudioRecorder();

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

  const displayAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    setAudioDetails({ ...audioDetails, url: url, hasBlob: true });
  };
  const handleAudioStop = (data) => {
    setAudioDetails(data);
  };

  const handleAudioUpload = async (audioFile) => {
    setIsProcessing(true);

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
    if (data.id) {
      setTranscript({ id: data.id });
      setIsProcessing(false);

      checkStatusOfTranscription();
    } else {
      console.log("try again");
    }
    //poll data
  };

  const handleReset = () => {
    setAudioDetails({ ...INITIAL_STATE });
    setTranscript({ id: "" });
  };

  const checkStatusOfTranscription = async () => {
    while (true) {
      const pollingResponse = await assemblyAPI.get(
        `/transcript/${transcript.id}`
      );
      const transcriptionResult = pollingResponse.data;

      if (transcriptionResult.status === "completed") {
        console.log(transcriptionResult);
        setTranscript({ ...transcript, ...transcriptionResult });
        break;
      } else if (transcriptionResult.status === "error") {
        throw new Error(`Transcription failed: ${transcriptionResult.error}`);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    }
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#FDF0D5", height: "100vh" }}>
        <Container maxWidth="lg">
          <Logo />
          <section>
            <Typography
              variant="h4"
              sx={{ paddingTop: "30px", paddingBottom: "30px" }}
            >
              Howdy!, let's trancribe your speech into accurate text using our
              AI
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
              icon
            </Typography>
            <Stack direction="row" spacing={3} sx={{ marginTop: "20px" }}>
              <Button
                variant="contained"
                disableElevation
                size="small"
                onClick={recorderControls.startRecording}
                sx={{
                  borderRadius: "20px",
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                  padding: "5px 15px",
                  "&:hover": {
                    backgroundColor: "#1C7C54",
                  },
                  "&:focus": {
                    backgroundColor: "#1C7C54",
                  },
                }}
              >
                Start recording
              </Button>

              <Button
                variant="outlined"
                size="small"
                onClick={recorderControls.stopRecording}
                sx={{
                  borderRadius: "20px",
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                  padding: "5px 15px",
                  "&:hover": {
                    backgroundColor: "#DB162F",
                    color: "#fff",
                  },
                  "&:focus": {
                    backgroundColor: "#DB162F",
                    color: "#fff",
                  },
                }}
              >
                Stop recording
              </Button>
            </Stack>

            {audioDetails.hasBlob && (
              <Box sx={{ marginTop: "20px" }}>
                <EmbedAudio audioDetails={audioDetails} />
                <Stack direction="row" spacing={3} sx={{ marginTop: "20px" }}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "20px",
                      textTransform: "capitalize",
                      fontFamily: "Poppins",
                      padding: "5px 15px",
                      "&:hover": {
                        backgroundColor: "#1C7C54",
                        color: "#fff",
                      },
                      "&:focus": {
                        backgroundColor: "#1C7C54",
                        color: "#fff",
                      },
                    }}
                    onClick={() =>
                      handleAudioUpload(recorderControls.recordingBlob)
                    }
                  >
                    Transcribe speech
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "20px",
                      textTransform: "capitalize",
                      fontFamily: "Poppins",
                      padding: "5px 10px",
                      "&:hover": {
                        backgroundColor: "#DB162F",
                        color: "#fff",
                      },
                      "&:focus": {
                        backgroundColor: "#DB162F",
                        color: "#fff",
                      },
                    }}
                    onClick={handleReset}
                  >
                    Reset speech
                  </Button>
                </Stack>
              </Box>
            )}
            {isProcessing && "Processing...."}

            {transcript.status === "completed" ? (
              <TranscriptSuccess transcript={transcript} />
            ) : (
              <TranscriptError transcript={transcript} />
            )}
          </section>
        </Container>
      </Box>
    </>
  );
};

export default App;
