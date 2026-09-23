import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss";

const Spotify = ({
  windowName = "spotify",
  setWindowsState,
  zIndex = 10,
  onFocus,
}) => {
  return (
    <MacWindow
      title="Spotify"
      width="30vw"
      height="52vh"
      defaultPos={{ x: 280, y: 100 }}
      windowName={windowName}
      setWindowsState={setWindowsState}
      zIndex={zIndex}
      onFocus={onFocus}
    >
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "0", border: "none" }}
          src="https://open.spotify.com/embed/album/0Rkv5iqjF2uenfL0OVB8hg?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Embed"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
