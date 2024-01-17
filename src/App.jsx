import { useState } from "react";
import axios from "axios";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

import { Box, Typography } from "@mui/material";
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
      <AudioRecorder
        onRecordingComplete={(blob) => displayAudioElement(blob)}
        recorderControls={recorderControls}
        showVisualizer={true}
      />
      <button onClick={recorderControls.startRecording}>Start recording</button>

      <button onClick={recorderControls.stopRecording}>Stop recording</button>

      {audioDetails.hasBlob && (
        <Box>
          <EmbedAudio audioDetails={audioDetails} />

          <button
            onClick={() => handleAudioUpload(recorderControls.recordingBlob)}
          >
            Transcribe recording
          </button>
          <button onClick={handleReset}>Reset </button>
        </Box>
      )}
      {isProcessing && "Processing...."}

      {transcript.status === "completed" ? (
        <TranscriptSuccess transcript={transcript} />
      ) : (
        <TranscriptError transcript={transcript} />
      )}
    </>
  );
};

export default App;
