import React, { useState } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Dock from "./components/Dock";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";

const App = () => {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: true,
  });

  const [zIndices, setZIndices] = useState({
    github: 10,
    note: 10,
    resume: 10,
    spotify: 10,
    cli: 12,
  });

  const [highestZ, setHighestZ] = useState(15);

  const bringToFront = (name) => {
    setHighestZ((prev) => {
      const nextZ = prev + 1;
      setZIndices((z) => ({ ...z, [name]: nextZ }));
      return nextZ;
    });
  };

  return (
    <main>
      <Nav />
      <Dock
        windowsState={windowsState}
        setWindowsState={setWindowsState}
        bringToFront={bringToFront}
      />

      {windowsState.github && (
        <Github
          windowName="github"
          setWindowsState={setWindowsState}
          zIndex={zIndices.github}
          onFocus={() => bringToFront("github")}
        />
      )}

      {windowsState.note && (
        <Note
          windowName="note"
          setWindowsState={setWindowsState}
          zIndex={zIndices.note}
          onFocus={() => bringToFront("note")}
        />
      )}

      {windowsState.resume && (
        <Resume
          windowName="resume"
          setWindowsState={setWindowsState}
          zIndex={zIndices.resume}
          onFocus={() => bringToFront("resume")}
        />
      )}

      {windowsState.spotify && (
        <Spotify
          windowName="spotify"
          setWindowsState={setWindowsState}
          zIndex={zIndices.spotify}
          onFocus={() => bringToFront("spotify")}
        />
      )}

      {windowsState.cli && (
        <Cli
          windowName="cli"
          setWindowsState={setWindowsState}
          zIndex={zIndices.cli}
          onFocus={() => bringToFront("cli")}
        />
      )}
    </main>
  );
};

export default App;
