import React from "react";
import "./Home.css";
import Timeline from "../../components/Home/Timeline/Timeline";
import Topics from "../../components/Home/Topics/Topics";
import HomeHeader from "../../components/PageHeaders/HomeHeader/HomeHeader";
function Home() {
  return (
    <div className="home-container">
      <div className="linear-gradient-background">
        <div className="home-title-container">
          <HomeHeader />
          <p className="home-description-text description-text-transition">
            Showcase of all my projects over the TIJ1O0-G tech class
          </p>
        </div>
      </div>
      <div className="content-container-home">
        <div className="spacer layered-waves">
          <i class="fas fa-caret-down"></i>
        </div>
        <Topics />
        <Timeline />
      </div>
    </div>
  );
}

export default Home;
