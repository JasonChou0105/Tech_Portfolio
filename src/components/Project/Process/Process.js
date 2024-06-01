import React from "react";
import ShowWhenInViewport from "../../ShowWhenInViewport";
import "./Process.css";

function Process() {
  return (
    <div className="process-container">
      <div className="spacer seperator" />
      <ShowWhenInViewport className="process-inner-container">
        <div className="process-content-container">
          <div className="process-header sub-header-container">Process</div>
          <div className="process-description-container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            molestias temporibus laborum, sapiente incidunt voluptatem accusamus
            molestiae aut quia in dignissimos vel pariatur dolorem. Iure eius
            corporis alias tempore nihil.
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
  );
}

export default Process;
