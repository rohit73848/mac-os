import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({
  windowName = "resume",
  setWindowsState,
  zIndex = 10,
  onFocus,
}) => {
  return (
    <MacWindow
      title="Preview — Rahit_Biswas_Resume.pdf"
      width="48vw"
      height="68vh"
      defaultPos={{ x: 220, y: 50 }}
      windowName={windowName}
      setWindowsState={setWindowsState}
      zIndex={zIndex}
      onFocus={onFocus}
    >
      <div className="resume-window">
        <iframe
          src="/Rahit_Biswas_Resume.pdf#toolbar=0"
          title="Rahit Biswas Resume"
        />
      </div>
    </MacWindow>
  );
};

export default Resume;