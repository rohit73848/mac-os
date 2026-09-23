import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";
const MacWindow = ({ children,width="30vw",height="54vh" }) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 70,
        y: 70,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>rahitbiswas - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
