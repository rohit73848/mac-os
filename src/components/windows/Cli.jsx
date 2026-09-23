import React, { useState, useRef, useEffect } from "react";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Cli = () => {
  const [history, setHistory] = useState([
    { type: "output", text: "Welcome to macOS Terminal (zsh)" },
    { type: "output", text: "Type 'help' to see a list of available commands.\n" },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();

    if (trimmed === "") {
      return null;
    }

    switch (trimmed) {
      case "help":
        return `Available commands:
  about      - Brief overview of who I am
  skills     - Technical skills & tools
  projects   - List of key projects
  education  - Academic background
  contact    - Social & contact links
  date       - Display current date and time
  whoami     - Show active user
  clear      - Clear terminal screen`;

      case "about":
        return "Rahit Biswas - Frontend Developer & BCA student building interactive web apps.";

      case "skills":
        return `Core Tech Stack:
- Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, SCSS, TailwindCSS
- Tools: Git, GitHub, VS Code
- Currently Learning: Node.js & Backend Development`;

      case "projects":
        return `Featured Projects:
1. macOS UI Clone (React.js, SCSS)
2. Personal Portfolio Website (HTML, CSS, JS)
3. Snake Game (JavaScript, Canvas)
4. Image Editor (JavaScript, Canvas API)
(Open the GitHub window to see live demos and repositories)`;

      case "education":
        return `Education:
- BCA (Bachelor of Computer Applications) — IGNOU (Ongoing)
- Higher Secondary (Class 12) — 2025`;

      case "contact":
        return `Contact Info:
- Email: biswasrahit6@gmail.com
- GitHub: https://github.com/rahitbiswas`;

      case "date":
        return new Date().toString();

      case "whoami":
        return "rahitbiswas";

      case "clear":
      case "cls":
        return "CLEAR";

      default:
        return `zsh: command not found: ${cmd}. Type 'help' for available commands.`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const command = input;
    const output = handleCommand(command);

    if (output === "CLEAR") {
      setHistory([]);
    } else {
      const newItems = [{ type: "input", text: command }];
      if (output) {
        newItems.push({ type: "output", text: output });
      }
      setHistory((prev) => [...prev, ...newItems]);
    }

    setInput("");
  };

  return (
    <MacWindow>
      <div className="cli-window" onClick={() => inputRef.current?.focus()}>
        <div className="cli-content">
          {history.map((item, index) => (
            <div key={index} className={`cli-line ${item.type}`}>
              {item.type === "input" && (
                <span className="cli-prompt">rahitbiswas@mac:~$</span>
              )}
              <span className="cli-text">{item.text}</span>
            </div>
          ))}
          <form onSubmit={handleSubmit} className="cli-input-form">
            <span className="cli-prompt">rahitbiswas@mac:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="cli-input"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </MacWindow>
  );
};

export default Cli;