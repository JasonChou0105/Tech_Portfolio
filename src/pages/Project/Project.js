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
      <div className="process-container">
        <div className="spacer seperator" />
        <ShowWhenInViewport className="process-inner-container">
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
    </div>
  );
}

function displayLetter(c) {
  return <div className="letter">{c}</div>;
}

export default Project;
