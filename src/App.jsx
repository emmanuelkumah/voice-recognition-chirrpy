import { useState, useEffect } from "react";
import axios from "axios";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";
import { Typography } from "@mui/material";

const INITIAL_STATE = {
  url: null,
  blob: null,
  chunks: null,
  duration: {
    h: 0,
    m: 0,
    s: 0,
  },
};
//create baseURL

const assemblyAPI = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: import.meta.env.VITE_API_KEY,
    "content-Type": "application/json",
  },
});
function App() {
  const [audioDetails, setAudioDetails] = useState(INITIAL_STATE);
  const [transcript, setTranscript] = useState({
    id: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transcriptError, setTranscriptError] = useState("");

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
    });
    setTranscript({ id: data.id });
    //poll data
    checkStatusOfTranscription();
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
      <Recorder
        recorder={true}
        audioURL={audioDetails.url}
        handleAudioStop={handleAudioStop}
        handleAudioUpload={handleAudioUpload}
        handleReset={handleReset}
      />
      <Typography variant="body1">
        {transcript.status === "completed" && transcript.text}
        {transcript.status === "error" &&
          `Transcription failed: ${transcriptionResult.error}`}
      </Typography>
    </>
  );
}

export default App;
