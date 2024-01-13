import { useState } from "react";
import axios from "axios";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

import { Typography } from "@mui/material";
import EmbedAudio from "./components/EmbedAudio";

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
  const [transcript, setTranscript] = useState({
    id: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transcriptError, setTranscriptError] = useState("");

  //new states
  const [audioDetails, setAudioDetails] = useState({
    blob: "",
    url: "",
    hasBlob: false,
  });

  const recorderControls = useAudioRecorder();

  // const addAudioElement = (blob) => {
  //   const url = URL.createObjectURL(blob);
  //   const audio = document.createElement("audio");
  //   audio.src = url;
  //   audio.controls = true;
  //   const audioElement = document.getElementById("audio");
  //   audioElement.appendChild(audio);
  // };

  //audio embed
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
  const handleStopRecording = (stop) => {
    stop;
    console.log("stopping");
    // recorderControls.stopRecording;
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
      <button
        disabled={!audioDetails.hasBlob}
        onClick={() => handleAudioUpload(recorderControls.recordingBlob)}
      >
        Upload recording
      </button>
      {audioDetails.hasBlob && <EmbedAudio audioDetails={audioDetails} />}
      <Typography variant="body1">
        {transcript.status === "completed" && transcript.text}
        {transcript.status === "error" &&
          `Transcription failed: ${transcriptionResult.error}`}
      </Typography>
    </>
  );
}

export default App;
