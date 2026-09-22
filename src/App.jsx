import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Dock from "./components/Dock";
import Github from "./components/windows/Github";
const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
    </main>
  );
};

export default App;
