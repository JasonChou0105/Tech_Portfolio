import React, { useRef } from "react";
import "./Home.css";
import Timeline from "../../components/Home/Timeline/Timeline";
import Topics from "../../components/Home/Topics/Topics";
import HomeHeader from "../../components/PageHeaders/HomeHeader/HomeHeader";
import { useScroll, useTransform, motion } from "framer-motion";
function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "170%"]);
  return (
    <div className="home-container">
      <div className="banner-container" ref={ref}>
        <motion.div style={{ y: textY }} className="home-title-container">
          <HomeHeader />
          <p className="description-text-transition home-description-text">
            Showcase of all my projects over the TIJ1O0-G tech class
          </p>
        </motion.div>
        <motion.div
          style={{ y: backgroundY }}
          className="linear-gradient-background"
        />
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
