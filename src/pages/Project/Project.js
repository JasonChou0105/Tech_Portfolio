import React, { useState } from "react";
import "./Project.css";

function Project({ title, images, description }) {
  const [curIndex, setCurIndex] = useState(0);
  console.log(curIndex);
  const size = images.length - 1;
  function rightArrowClick() {
    if (curIndex < size) {
      setCurIndex((index) => index + 1);
    } else {
      setCurIndex(0);
    }
  }
  function leftArrowClick() {
    if (curIndex > 0) {
      setCurIndex((index) => index - 1);
    } else {
      setCurIndex(size);
    }
  }
  return (
    <div className="project-container">
      <div className="header-container">{title}</div>
      <div className="content-container">
        <div className="inner-container image-container">
          <img
            className="image image-unfocused image-unfocused-left"
            src={images[curIndex < size ? curIndex + 1 : 0]}
            alt="Microbit game project"
          />
          <div onClick={leftArrowClick} className="arrow-button">
            <i className="fas fa-chevron-left icon-arrow"></i>
          </div>
          <div className="image-focus-container">
            <img
              className="image image-focused"
              src={images[curIndex]}
              alt="Microbit game project"
            />
          </div>
          <div onClick={rightArrowClick} className="arrow-button">
            <i className="fas fa-chevron-right icon-arrow"></i>
          </div>
          <img
            className="image image-unfocused image-unfocused-right"
            src={images[curIndex > 0 ? curIndex - 1 : size]}
            alt="Microbit game project"
          />
        </div>
        <div className="inner-container description-container">
          <div className="description">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Project;
