import React from "react";
import ShowWhenInViewport from "../../ShowWhenInViewport";
import "./Process.css";
import ProjectSectionSeperator from "./ProcessSectionSeperator/ProjectSectionSeperator";

function Process() {
  return (
    <div>
      <div className="process-container process-container-1">
        <ProjectSectionSeperator link="section-seperator-svg.svg" />
        <ShowWhenInViewport className="process-inner-container ">
          <div className="process-content-container">
            <div className="process-header sub-header-container">Process</div>
            <div className="process-description-container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              molestias temporibus laborum, sapiente incidunt voluptatem
              accusamus molestiae aut quia in dignissimos vel pariatur dolorem.
              Iure eius corporis alias tempore nihil.
            </div>
          </div>
          <div className="process-image-container">
            <div className="process-image-header sub-header-container">
              Idek what to do
            </div>
            <img
              className="process-image"
              src="/images/dream-space/House.jpeg"
              alt=""
            />
          </div>
        </ShowWhenInViewport>
      </div>
      <div className="process-container process-container-2">
        <ProjectSectionSeperator link="section-seperator-svg-2.svg" />
        <ShowWhenInViewport className="process-inner-container ">
          <div className="process-image-container">
            <div className="process-image-header sub-header-container">
              Idek what to do
            </div>
            <img
              className="process-image"
              src="/images/dream-space/House.jpeg"
              alt=""
            />
          </div>
          <div className="process-content-container">
            <div className="process-description-container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              molestias temporibus laborum, sapiente incidunt voluptatem
              accusamus molestiae aut quia in dignissimos vel pariatur dolorem.
              Iure eius corporis alias tempore nihil.
            </div>
          </div>
        </ShowWhenInViewport>
      </div>
    </div>
  );
}

export default Process;
