# 🍎 macOS Portfolio Web Application

A sleek, interactive, and responsive macOS-inspired web desktop experience and portfolio built with **React**, **Vite**, and **SCSS**.

---

## 🔗 Live Demo
> 🚀 **[View Live Demo]([YOUR_LIVE_DEMO_URL_HERE](https://rohit73848.github.io/mac-os/))** *([Add your live deployment URL here](https://rohit73848.github.io/mac-os/))*

---

## ✨ Features

- ** Authentic macOS Glassmorphism UI**: High-fidelity frosted glass navigation bar, interactive dock, and desktop environment with backdrop blurs and subtle borders.
- **🪟 Advanced Window Manager**:
  - Drag, drop, and resize windows smoothly across desktop bounds (powered by `react-rnd`).
  - Active window focus with dynamic z-index management.
  - Functional macOS traffic lights (🔴 Close, 🟡 Minimize, 🟢 Maximize / Restore).
- **💻 Interactive macOS Terminal (zsh)**:
  - Real-time command parsing with color-coded prompt (`rahit@macbook:~$`).
  - Built-in commands: `help`, `about`, `skills`, `projects`, `education`, `contact`, `socials`, `date`, `whoami`, `clear`.
  - Arrow Up / Down command history recall.
- **📂 GitHub Projects Window**:
  - Visual cards showcasing featured projects with live demo and repository links.
- **📝 Notes App**:
  - Embedded developer profile and code config with syntax highlighting and line numbers.
- **📄 PDF Resume Viewer**:
  - Embedded in-window resume preview with toolbar controls.
- **🎵 Spotify Widget**:
  - Integrated music stream player inside a native-styled window.
- **🚀 macOS Dock**:
  - Fluid magnification curves on hover.
  - Running app active indicator dots.
  - Native-style floating tooltips.
  - Direct actions for **Mail** (`mailto:`), **Google Calendar**, and **Instagram**.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI Component Library |
| **Vite** | Next-generation frontend tooling and bundler |
| **SCSS (Sass)** | Modular, glassmorphic styling and animations |
| **react-rnd** | Resizable and draggable window mechanics |
| **react-syntax-highlighter** | Code highlighting for the Notes application |

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rahitbiswas/mac-os.git
   cd mac-os
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
mac-os/
├── public/
│   ├── doc-icons/           # Dock SVG icons (GitHub, Note, PDF, Spotify, etc.)
│   ├── navbar-icons/        # Top nav icons (Apple, Wi-Fi)
│   ├── Rahit_Biswas_Resume.pdf
│   ├── note.txt
│   └── wallpaper.jpg        # macOS Desktop wallpaper
├── src/
│   ├── assets/
│   │   └── github.json      # Projects data
│   ├── components/
│   │   ├── windows/         # Individual Mac Windows
│   │   │   ├── Cli.jsx      # Terminal component
│   │   │   ├── cli.scss
│   │   │   ├── Github.jsx   # Projects window
│   │   │   ├── github.scss
│   │   │   ├── MacWindow.jsx # Reusable Draggable Mac Window
│   │   │   ├── window.scss
│   │   │   ├── Note.jsx     # Notes app
│   │   │   ├── note.scss
│   │   │   ├── Resume.jsx   # PDF previewer
│   │   │   ├── resume.scss
│   │   │   ├── Spotify.jsx  # Spotify player
│   │   │   └── spotify.scss
│   │   ├── DateTime.jsx     # Live macOS clock
│   │   ├── Dock.jsx         # macOS Dock
│   │   ├── dock.scss
│   │   ├── Nav.jsx          # Top Menu Bar
│   │   └── nav.scss
│   ├── App.jsx              # Main Application Orchestrator
│   ├── App.scss
│   └── main.jsx
├── package.json
└── README.md
```

---

## 👨‍💻 Author

**Rahit Biswas**
- 🌐 GitHub: [@rahitbiswas](https://github.com/rahitbiswas)
- 📸 Instagram: [@rahit._official](https://www.instagram.com/rahit._official/)
- ✉️ Email: [biswasrahit6@gmail.com](mailto:biswasrahit6@gmail.com)

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
