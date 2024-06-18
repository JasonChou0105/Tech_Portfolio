import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Overview.css";

function Overview({ title, subheader, images, description, video }) {
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
            {video && (
              <SplideSlide>
                <video controls height="500">
                  <source src={video} type="video/webm" />
                </video>
              </SplideSlide>
            )}
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
