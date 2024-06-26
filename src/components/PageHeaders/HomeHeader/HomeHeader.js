import React from "react";
import "./HomeHeader.css";
import "../PageHeader.css";

function HomeHeader() {
  return (
    <div className="header-container">
      <div className="first-word">
        <div className="letter">J</div>
        <div className="letter">A</div>
        <div className="letter">S</div>
        <div className="letter">O</div>
        <div className="letter">N</div>
      </div>
      <div className="second-word">
        <div className="letter">C</div>
        <div className="letter">H</div>
        <div className="letter">O</div>
        <div className="letter">U</div>
      </div>
    </div>
  );
}

export default HomeHeader;
