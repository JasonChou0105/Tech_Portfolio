import React from "react";
import ProjectSectionSeperator from "../ProcessSectionSeperator/ProjectSectionSeperator";
import ShowWhenInViewport from "../../../ShowWhenInViewport";
import "./ProcessSection.css";

function ProcessSection({
  description,
  title,
  containerClass,
  contentClass,
  sectionSeperatorLink,
  image,
  imageTitle,
}) {
  return (
    <div className={`process-container ${containerClass}`}>
      <ProjectSectionSeperator link={sectionSeperatorLink} />
      <div className="process-section-header sub-header-container">{title}</div>

      <ShowWhenInViewport className={`process-inner-container ${contentClass}`}>
        <div className="process-content-container">
          <div className="process-description-container">{description}</div>
        </div>
        <div className="process-image-container">
          <div className="process-image-header sub-header-container">
            {imageTitle}
          </div>
          <img className="process-image" src={image} alt="" />
        </div>
      </ShowWhenInViewport>
    </div>
  );
}

export default ProcessSection;
