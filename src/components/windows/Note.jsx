import React, { useEffect, useState } from "react";
import MacWindow from "./MacWindow";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./note.scss";

const Note = ({
  windowName = "note",
  setWindowsState,
  zIndex = 10,
  onFocus,
}) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch(() => setMarkdown("// Error loading note.txt"));
  }, []);

  return (
    <MacWindow
      title="Notes — profile.config.ts"
      width="42vw"
      height="58vh"
      defaultPos={{ x: 140, y: 65 }}
      windowName={windowName}
      setWindowsState={setWindowsState}
      zIndex={zIndex}
      onFocus={onFocus}
    >
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter
            language="typescript"
            style={atomOneDark}
            customStyle={{
              background: "transparent",
              padding: "1rem",
              margin: 0,
              fontSize: "0.83rem",
              lineHeight: "1.5",
              fontFamily:
                "'SF Mono', Menlo, Monaco, Consolas, 'Courier New', monospace",
            }}
            showLineNumbers={true}
          >
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <div className="note-loading">
            <div className="spinner"></div>
            <p>Loading profile...</p>
          </div>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
