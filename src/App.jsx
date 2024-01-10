import { useState, useEffect } from "react";
import axios from "axios";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";

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

  //polling
  useEffect(() => {
    const interval = setInterval(async () => {
      if (transcript.id && transcript.status !== "completed" && isLoading) {
        try {
          const { data: transcriptData } = await assemblyAPI.get(
            `/transcript/${transcript.id}`
          );
          //update transcript
          console.log(transcriptData);
          setTranscript({ ...transcript, ...transcriptData });
        } catch (error) {
          console.log(error);
        }
      } else {
        setIsLoading(false);
        clearInterval(interval);
      }
      return clearInterval(interval);
    }, 1000);
  }, [transcript, isLoading]);

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
    console.log(data.id);
    setTranscript({ id: data.id });
  };
  const handleReset = () => {
    setAudioDetails({ ...INITIAL_STATE });
    setTranscript({ id: "" });
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
      <section>
        {transcript.text && transcript.status === "completed"
          ? transcript.text
          : "Loading"}
      </section>
    </>
  );
}

export default App;
