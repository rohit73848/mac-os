import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Dock from "./components/Dock";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Note/>
    </main>
  );
};

export default App;
