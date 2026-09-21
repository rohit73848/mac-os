import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Dock from "./components/Dock";
import MacWindow from "./components/windows/MacWindow";
const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <MacWindow>Hello</MacWindow>
    </main>
  );
};

export default App;
