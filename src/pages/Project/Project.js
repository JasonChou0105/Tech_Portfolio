import "./Project.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../App.css";
import ShowWhenInViewport from "../../components/ShowWhenInViewport";

function Project({ title, subheader, images, description }) {
  return (
    <div className="project-container">
      <div className="overview-container">
        <div className="header-container">
          {title.split("").map((c) => displayLetter(c))}
        </div>
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
      <ShowWhenInViewport className="process-container">
        <div className="spacer seperator" />
        <div className="process-header sub-header-container">Process</div>
      </ShowWhenInViewport>
    </div>
  );
}

function displayLetter(c) {
  return <div className="letter">{c}</div>;
}

export default Project;
