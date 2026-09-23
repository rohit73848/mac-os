import React from "react";
import "./dock.scss";

const Dock = ({ windowsState, setWindowsState, bringToFront }) => {
  const toggleWindow = (name) => {
    setWindowsState((state) => {
      const willOpen = !state[name];
      if (willOpen && bringToFront) {
        bringToFront(name);
      }
      return { ...state, [name]: willOpen };
    });
  };

  const handleMail = () => {
    window.location.href = "mailto:biswasrahit6@gmail.com";
  };

  const handleCalendar = () => {
    window.open("https://calendar.google.com", "_blank", "noopener,noreferrer");
  };

  const handleInstagram = () => {
    window.open(
      "https://www.instagram.com/rahit._official/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="dock-wrapper">
      <div className="dock">
        {/* GitHub */}
        <div
          onClick={() => toggleWindow("github")}
          className={`dock-item ${windowsState.github ? "active" : ""}`}
          data-tooltip="GitHub"
        >
          <div className="icon github">
            <img src="/doc-icons/github.svg" alt="GitHub" />
          </div>
          {windowsState.github && <span className="active-dot" />}
        </div>

        {/* Note */}
        <div
          onClick={() => toggleWindow("note")}
          className={`dock-item ${windowsState.note ? "active" : ""}`}
          data-tooltip="Notes"
        >
          <div className="icon note">
            <img src="/doc-icons/note.svg" alt="Notes" />
          </div>
          {windowsState.note && <span className="active-dot" />}
        </div>

        {/* Resume */}
        <div
          onClick={() => toggleWindow("resume")}
          className={`dock-item ${windowsState.resume ? "active" : ""}`}
          data-tooltip="Resume"
        >
          <div className="icon pdf">
            <img src="/doc-icons/pdf.svg" alt="Resume" />
          </div>
          {windowsState.resume && <span className="active-dot" />}
        </div>

        {/* Calendar */}
        <div
          onClick={handleCalendar}
          className="dock-item"
          data-tooltip="Calendar"
        >
          <div className="icon calender">
            <img src="/doc-icons/calender.svg" alt="Calendar" />
          </div>
        </div>

        {/* Spotify */}
        <div
          onClick={() => toggleWindow("spotify")}
          className={`dock-item ${windowsState.spotify ? "active" : ""}`}
          data-tooltip="Spotify"
        >
          <div className="icon spotify">
            <img src="/doc-icons/spotify.svg" alt="Spotify" />
          </div>
          {windowsState.spotify && <span className="active-dot" />}
        </div>

        {/* Mail */}
        <div onClick={handleMail} className="dock-item" data-tooltip="Mail">
          <div className="icon mail">
            <img src="/doc-icons/mail.svg" alt="Mail" />
          </div>
        </div>

        {/* Instagram / Link */}
        <div
          onClick={handleInstagram}
          className="dock-item"
          data-tooltip="Instagram"
        >
          <div className="icon link">
            <img src="/doc-icons/link.svg" alt="Instagram" />
          </div>
        </div>

        {/* Terminal (CLI) */}
        <div
          onClick={() => toggleWindow("cli")}
          className={`dock-item ${windowsState.cli ? "active" : ""}`}
          data-tooltip="Terminal"
        >
          <div className="icon cli">
            <img src="/doc-icons/cli.svg" alt="Terminal" />
          </div>
          {windowsState.cli && <span className="active-dot" />}
        </div>
      </div>
    </footer>
  );
};

export default Dock;
