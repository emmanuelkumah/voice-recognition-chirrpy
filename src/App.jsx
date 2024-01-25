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
};
const App = () => {
  const [audioDetails, setAudioDetails] = useState(INITIAL_STATE);
  const [transcript, setTranscript] = useState({
    id: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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

  const displayAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    setAudioDetails({ ...audioDetails, url: url, hasBlob: true });
  };
  const handleAudioStop = (data) => {
    setAudioDetails(data);
  };

  const handleAudioUpload = async (audioFile) => {
    setIsLoading(true);
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
  };

  const handleReset = () => {
    setAudioDetails({ ...INITIAL_STATE });
    setTranscript({ id: "" });
  };

  // const checkStatusOfTranscription = async (id) => {
  //   while (true) {
  //     const pollingResponse = await assemblyAPI.get(`/transcript/${id}`);
  //     const transcriptionResult = pollingResponse.data;

  //     switch (transcriptionResult.status) {
  //       case "processing":
  //         setIsProcessing(true);

  //         break;
  //       case "completed":
  //         setIsProcessing(false);
  //         setTranscript({ ...transcriptionResult });
  //         break;
  //       case "error":
  //         // setTranscriptError(transcriptionResult.error);
  //         throw new Error(`Transcription failed: ${transcriptionResult.error}`);

  //       default:
  //         await new Promise((resolve) => setTimeout(resolve, 3000));

  //         break;
  //     }
  //   }
  // };

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

            {audioDetails.hasBlob && (
              <Box sx={{ marginTop: "20px" }}>
                <EmbedAudio audioDetails={audioDetails} />
                <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "10px",
                      textTransform: "capitalize",
                      fontFamily: "Poppins",
                      padding: "5px 15px",
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
                      borderRadius: "10px",
                      textTransform: "capitalize",
                      fontFamily: "Poppins",
                      padding: "5px 10px",
                    }}
                    onClick={handleReset}
                  >
                    Reset speech
                  </Button>
                </Stack>
              </Box>
            )}
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
