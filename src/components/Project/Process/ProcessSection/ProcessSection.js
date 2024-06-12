import React from "react";
import ProjectSectionSeperator from "../ProcessSectionSeperator/ProjectSectionSeperator";
import ShowWhenInViewport from "../../../ShowWhenInViewport";

function ProcessSection({
  description,
  title,
  containerClass,
  contentClass,
  sectionSeperatorLink,
}) {
  return (
    <div className={`process-container ${containerClass}`}>
      <ProjectSectionSeperator link={sectionSeperatorLink} />
      <ShowWhenInViewport className={`process-inner-container ${contentClass}`}>
        <div className="process-content-container">
          <div className="process-description-container">{description}</div>
        </div>
        <div className="process-image-container">
          <div className="process-image-header sub-header-container">
            {title}
          </div>
          <img
            className="process-image"
            src="/images/dream-space/House.jpeg"
            alt=""
          />
        </div>
      </ShowWhenInViewport>
    </div>
  );
}

export default ProcessSection;
