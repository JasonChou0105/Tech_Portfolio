import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Project from "./pages/Project/Project";
import PageContainer from "./components/PageContainer/PageContainer";
import ScrollToTop from "./ScrollToTop";
import DreamSpaceHeader from "./components/PageHeaders/DreamSpaceHeader/DreamSpaceHeader";
import MicrobitHeader from "./components/PageHeaders/MicrobitHeader/MicrobitHeader";
import CircuitHeader from "./components/PageHeaders/CircuitHeader/CircuitHeader";
import BottleRocketHeader from "./components/PageHeaders/BottleRocketHeader/BottleRocketHeader";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <PageContainer>
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route
              path="/project/dream-space"
              exact
              Component={Project.bind(this, {
                title: <DreamSpaceHeader />,
                subheader: "Designing and Building a Space",
                images: [
                  "/images/dream-space/House.jpeg",
                  "/images/dream-space/House2.jpeg",
                  "/images/microbit/Microbit.png",
                ],
                description:
                  "In the dream space project we were assigned to make a detailed, hand-drawn floor plan of our dream space. We used TinkerCAD to create a 3D model of our floor plan, scaling further if necessary. We then built a physical model of our dream space using materials such as cardboard, foam core board, or any other appropriate materials, ensuring that the model accurately represents the design from the drawn floor plan and TinkerCAD.",
                processDescriptions: [
                  "I started by making a floor plan for my dream space. This included elements like doors, toilets, sinks, walls, shelfs, tables, etc. This helped me understand the scaling of my dream space and how big everything should be",
                  "I then designed the dream space in tinkercad which is a 3d modeling software. This helped me learn how to design 3d objects and helped me learn the mechanics of 3d modeling. I learned how to scale objects and fit them into a 3 dimensional space",
                ],
              })}
            />
            <Route
              path="/project/microbit"
              exact
              Component={Project.bind(this, {
                title: <MicrobitHeader />,
                images: [
                  "/images/dream-space/House.jpeg",
                  "/images/dream-space/House2.jpeg",
                  "/images/microbit/Microbit.png",
                ],
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati ut, tempore consectetur non distinctio quasi error vitae officiis voluptatum dolor debitis ipsa accusantium vel tempora enim iste! Exercitationem, corrupti!",
              })}
            />
            <Route
              path="/project/circuit"
              exact
              Component={Project.bind(this, {
                title: <CircuitHeader />,
                images: [
                  "/images/dream-space/House.jpeg",
                  "/images/dream-space/House2.jpeg",
                  "/images/microbit/Microbit.png",
                ],
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati ut, tempore consectetur non distinctio quasi error vitae officiis voluptatum dolor debitis ipsa accusantium vel tempora enim iste! Exercitationem, corrupti!",
              })}
            />
            <Route
              path="/project/bottle-rocket"
              exact
              Component={Project.bind(this, {
                title: <BottleRocketHeader />,
                images: [
                  "/images/dream-space/House.jpeg",
                  "/images/dream-space/House2.jpeg",
                  "/images/microbit/Microbit.png",
                ],
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati ut, tempore consectetur non distinctio quasi error vitae officiis voluptatum dolor debitis ipsa accusantium vel tempora enim iste! Exercitationem, corrupti!",
              })}
            />
          </Routes>
        </PageContainer>
        <Footer />
      </Router>
    </>
  );
}

export default App;
