import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Overview.css";

function Overview({ title, subheader, images, description }) {
  return (
    <div className="overview-container">
      <div className="header-container">{title}</div>
      <div className="sub-header-container description-text-transition">
        {subheader}
      </div>
      <div className="content-container">
        <div className="inner-container image-container">
          <Splide
            options={{
              rewind: true,
              width: 800,
              gap: "1rem",
              padding: "0px",
            }}
            aria-label="My Favorite Images"
          >
            {images.map((image) => (
              <SplideSlide>
                <img className="slide-image" src={image} alt="" />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="inner-container description-container">
          <div className="description">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
