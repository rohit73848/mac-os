import React, { useState, useRef, useEffect } from "react";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Cli = ({
  windowName = "cli",
  setWindowsState,
  zIndex = 10,
  onFocus,
}) => {
  const [history, setHistory] = useState([
    { type: "system", text: "Last login: " + new Date().toDateString() + " on ttys001" },
    { type: "system", text: "Welcome to macOS Terminal (zsh)" },
    { type: "system", text: "Type 'help' to see the list of available commands.\n" },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim();
    const lower = trimmed.toLowerCase();

    if (lower === "") {
      return null;
    }

    switch (lower) {
      case "help":
        return `Available Commands:
  about       - Brief introduction about Rahit Biswas
  skills      - Technical skills & framework proficiencies
  projects    - List of key projects
  education   - Academic qualifications
  contact     - Email & social links
  clear       - Clear the terminal screen
  date        - Show current date and time
  whoami      - Display current logged-in user
  socials     - Quick links to Instagram, GitHub & Mail`;

      case "about":
        return "👋 Hi, I'm Rahit Biswas! A passionate Frontend Developer & BCA student crafting responsive, interactive web experiences.";

      case "skills":
        return `🚀 Tech Stack:
• Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, SCSS, TailwindCSS
• Tools: Git, GitHub, VS Code, Vite
• Currently Exploring: Backend Development & Node.js`;

      case "projects":
        return `📂 Featured Projects:
1. macOS Web Portfolio (React.js, SCSS, Vite)
2. Personal Portfolio Website (HTML, CSS, JavaScript)
3. Snake Game (Canvas, JavaScript)
4. Image Editor Web App (Canvas API, JavaScript)
👉 Click the GitHub icon in the Dock to view source code and live demos!`;

      case "education":
        return `🎓 Education:
• BCA (Bachelor of Computer Applications) — IGNOU (Ongoing)
• Higher Secondary Education (Class 12) — 2025`;

      case "contact":
      case "socials":
        return `📫 Connect with Rahit:
• Email: rohit.noni2006@gamil.com
• GitHub: https://github.com/rohit73848
• Instagram: https://www.instagram.com/rahit._official/`;

      case "whoami":
        return "rahitbiswas (administrator)";

      case "date":
        return new Date().toString();

      case "clear":
      case "cls":
        return "CLEAR";

      default:
        return `zsh: command not found: ${trimmed}. Type 'help' for a list of commands.`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentInput = input;
    const output = handleCommand(currentInput);

    if (output === "CLEAR") {
      setHistory([]);
    } else {
      const newItems = [{ type: "input", text: currentInput }];
      if (output) {
        newItems.push({ type: "output", text: output });
      }
      setHistory((prev) => [...prev, ...newItems]);
    }

    if (currentInput.trim()) {
      setCmdHistory((prev) => [...prev, currentInput]);
    }
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInput(cmdHistory[nextIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIdx);
        setInput(cmdHistory[nextIdx] || "");
      }
    }
  };

  return (
    <MacWindow
      title="Terminal — zsh"
      width="44vw"
      height="50vh"
      defaultPos={{ x: 100, y: 80 }}
      windowName={windowName}
      setWindowsState={setWindowsState}
      zIndex={zIndex}
      onFocus={onFocus}
    >
      <div
        className="cli-window"
        ref={terminalBodyRef}
        onClick={() => inputRef.current?.focus()}
      >
        <div className="cli-content">
          {history.map((item, index) => (
            <div key={index} className={`cli-line ${item.type}`}>
              {item.type === "input" && (
                <span className="cli-prompt">
                  <span className="user">rahit@macbook</span>
                  <span className="sep">:</span>
                  <span className="dir">~</span>
                  <span className="symbol">$</span>
                </span>
              )}
              <span className="cli-text">{item.text}</span>
            </div>
          ))}

          <form onSubmit={handleSubmit} className="cli-input-form">
            <span className="cli-prompt">
              <span className="user">rahit@macbook</span>
              <span className="sep">:</span>
              <span className="dir">~</span>
              <span className="symbol">$</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="cli-input"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </MacWindow>
  );
};

export default Cli;