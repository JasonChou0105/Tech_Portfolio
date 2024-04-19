import React from "react";
import "./Project.css";

function Project({ title, image, description }) {
  return (
    <div className="container">
      <div className="header-container">{title}</div>
    </div>
  );
}

export default Project;
