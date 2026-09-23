import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";

const Nav = () => {
  return (
    <nav className="mac-navbar">
      <div className="left">
        <div className="apple-icon" title="Apple">
          <img src="/navbar-icons/apple.svg" alt="Apple" />
        </div>
        <div className="nav-item app-name">
          <span>Rahit Biswas</span>
        </div>
        <div className="nav-item">
          <span>File</span>
        </div>
        <div className="nav-item">
          <span>Edit</span>
        </div>
        <div className="nav-item">
          <span>View</span>
        </div>
        <div className="nav-item">
          <span>Window</span>
        </div>
        <div className="nav-item">
          <span>Help</span>
        </div>
      </div>
      <div className="right">
        <div className="nav-icon" title="Wi-Fi">
          <img src="/navbar-icons/wifi.svg" alt="Wi-Fi" />
        </div>
        <div className="nav-item datetime-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
