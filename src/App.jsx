import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Dock from "./components/Dock";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Note/>
      <Resume/>
    </main>
  );
};

export default App;
