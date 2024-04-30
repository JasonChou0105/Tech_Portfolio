import React from "react";
import "./Home.css";
import Timeline from "../../components/Home/Timeline/Timeline";
import Topics from "../../components/Home/Topics/Topics";
function Home() {
  return (
    <div className="home-container">
      <div className="linear-gradient-background">
        <div className="home-title-container">
          <div className="home-title">
            <div className="letter">J</div>
            <div className="letter">A</div>
            <div className="letter">S</div>
            <div className="letter">O</div>
            <div className="letter">N</div>

            <div className="letter">C</div>
            <div className="letter">H</div>
            <div className="letter">O</div>
            <div className="letter">U</div>
          </div>
          <p className="home-description-text">
            Showcase of all my projects over the TIJ1O0-G tech class
          </p>
        </div>
      </div>
      <div className="content-container-home">
        <div className="spacer layered-waves"></div>
        <Topics />
        <Timeline />
      </div>
    </div>
  );
}

export default Home;
