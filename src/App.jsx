import { useState } from "react";
import axios from "axios";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

//import { Recorder } from "react-voice-recorder";
//import "react-voice-recorder/dist/index.css";
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

  const recorderControls = useAudioRecorder();

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  const handleAudioStop = (data) => {
    setAudioDetails(data);
  };
  const handleAudioUpload = async (audioFile) => {
    console.log(audioFile);
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
  //upload recoding
  const uploadRecording = (blob) => {
    console.log(blob);
  };
  return (
    <>
      {/* <Recorder
        recorder={true}
        audioURL={audioDetails.url}
        handleAudioStop={handleAudioStop}
        handleAudioUpload={handleAudioUpload}
        handleReset={handleReset}
      /> */}
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        showVisualizer={true}
      />
      <button onClick={recorderControls.stopRecording}>Stop recording</button>
      <button onClick={() => handleAudioUpload(recorderControls.recordingBlob)}>
        Upload recording
      </button>
      <Typography variant="body1">
        {transcript.status === "completed" && transcript.text}
        {transcript.status === "error" &&
          `Transcription failed: ${transcriptionResult.error}`}
      </Typography>
    </>
  );
}

export default App;
