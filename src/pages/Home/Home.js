import React from "react";
import "./Home.css";
import Timeline from "../../components/Home/Timeline/Timeline";
function Home() {
  return (
    <div className="container">
      <div className="linear-gradient-background">
        <div className="home-title-container">
          <h1 className="home-title">JASON CHOU</h1>
          <p className="desc-text">
            Showcase of all my projects over the TIJ1O0-G tech class
          </p>
        </div>
      </div>
      <div className="content-container">
        <div className="spacer layered-waves"></div>
        <Timeline />
      </div>
    </div>
  );
}

export default Home;
