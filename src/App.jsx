import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

function App() {
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err) // onNotAllowedOrFound
  );
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };
  return (
    <>
      <h3>This is the app page</h3>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        showVisualizer={true}
      />
      <button onClick={recorderControls.stopRecording}>Stop recording</button>
    </>
  );
}

export default App;
