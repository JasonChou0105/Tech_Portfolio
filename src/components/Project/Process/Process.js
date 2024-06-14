import React from "react";
import "./Process.css";
import ProcessSection from "./ProcessSection/ProcessSection";

function Process({ processInfo }) {
  return (
    <div>
      <div className="process-header sub-header-container">Process</div>
      {displaySections(processInfo)}
    </div>
  );
}

function displaySections(info) {
  var result = [];
  for (let i = 0; i < info.length; i++) {
    const odd = i % 2 === 0 ? false : true;
    console.log(info[i].description);
    result.push(
      <ProcessSection
        description={info[i].description}
        title={info[i].title}
        containerClass={`${
          odd ? "process-container-2" : "process-container-1"
        }`}
        contentClass={`${
          odd ? "content-containter-2" : "content-containter-1"
        }`}
        sectionSeperatorLink={`${
          i === 0
            ? "section-seperator-svg.svg"
            : odd
            ? "section-seperator-svg-2.svg"
            : "section-seperator-svg-3.svg"
        }`}
        image={info[i].image}
        imageTitle={info[i].imageTitle}
      />
    );
  }
  return result;
}

export default Process;
