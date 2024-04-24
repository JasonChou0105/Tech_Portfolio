import "./Project.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Project({ title, images, description }) {
  return (
    <div className="project-container">
      <div className="header-container">{title}</div>
      <div className="content-container">
        <div className="inner-container image-container">
          <Splide
            options={{
              rewind: true,
              width: 800,
              gap: "1rem",
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <img src={images[0]} alt=" 1" />
            </SplideSlide>
            <SplideSlide>
              <img src={images[1]} alt=" 2" />
            </SplideSlide>
          </Splide>
        </div>
        <div className="inner-container description-container">
          <div className="description">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Project;
