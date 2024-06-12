import React from "react";
import "./Process.css";
import ProcessSection from "./ProcessSection/ProcessSection";

function Process({ processDescriptions }) {
  return (
    <div>
      <div className="process-header sub-header-container">Process</div>
      {displaySections(processDescriptions)}
    </div>
  );
}

function displaySections(descriptions) {
  var result = [];
  for (let i = 0; i < descriptions.length; i++) {
    const odd = i % 2 === 0 ? false : true;
    result.push(
      <ProcessSection
        description={descriptions[i]}
        title="wopeifh wuiehfnius bhefi"
        containerClass={`${
          odd ? "process-container-2" : "process-container-1"
        }`}
        contentClass={`${
          odd ? "content-containter-2" : "content-containter-1"
        }`}
        sectionSeperatorLink={`${
          odd ? "section-seperator-svg-2.svg" : "section-seperator-svg.svg"
        }`}
      />
    );
  }
  return result;
}

export default Process;
