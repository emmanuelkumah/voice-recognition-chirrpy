import React from "react";

const EmbedAudio = ({ audioDetails }) => {
  return (
    <>
      <figure>
        <figcaption>Listen to the recorded audio</figcaption>
        <audio controls src={audioDetails.url}></audio>
      </figure>
    </>
  );
};

export default EmbedAudio;
