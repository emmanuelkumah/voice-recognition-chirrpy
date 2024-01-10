import React from "react";

const Status = ({ isLoading, status }) => {
  return <div>{isLoading && `Calculating...${status || "uploading"}`}</div>;
};

export default Status;
