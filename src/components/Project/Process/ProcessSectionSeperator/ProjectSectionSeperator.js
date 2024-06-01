import React from "react";
import "./ProjectSectionSeperator.css";

function ProjectSectionSeperator({ link }) {
  return (
    <div
      className="spacer seperator"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/svgs/${link})`,
      }}
    />
  );
}

export default ProjectSectionSeperator;
