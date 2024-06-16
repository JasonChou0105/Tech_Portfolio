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
import BannerHeader from "./components/PageHeaders/BannerHeader/BannerHeader";

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
                  "/images/dream-space/image3.jpeg",
                  "/images/dream-space/image4.jpeg",
                  "/images/dream-space/image5.jpeg",
                  "/images/dream-space/image6.jpeg",
                ],
                description:
                  "In the dream space project we were assigned to make a detailed, hand-drawn floor plan of our dream space. We used TinkerCAD to create a 3D model of our floor plan, scaling further if necessary. We then built a physical model of our dream space using materials such as cardboard, foam core board, or any other appropriate materials, ensuring that the model accurately represents the design from the drawn floor plan and TinkerCAD.",
                processInfo: [
                  {
                    description:
                      "I started by making a floor plan for my dream space. This included elements like doors, toilets, sinks, walls, shelfs, tables, etc. This helped me understand the scaling of my dream space and how big everything should be",
                    image: "/images/dream-space/floor_plan.jpeg",
                    title: "Floor Plan",
                    imageTitle: "My Floor Plan",
                  },
                  {
                    description:
                      "I then designed the dream space in tinkercad which is a 3d modeling software. This helped me learn how to design 3d objects and helped me learn the mechanics of 3d modeling. I learned how to scale objects and fit them into a 3 dimensional space",
                    image: "/images/dream-space/tinkercad.png",
                    title: "Tinkercad",
                    imageTitle: "Model of my dream floor on Tinkercad",
                  },
                  {
                    description:
                      "I then designed the dream space in tinkercad which is a 3d modeling software. This helped me learn how to design 3d objects and helped me learn the mechanics of 3d modeling. I learned how to scale objects and fit them into a 3 dimensional space",
                    image: "/images/dream-space/House.jpeg",
                    title: "Building Exterior",
                    imageTitle: `"Skeleton" of my Room`,
                  },
                  {
                    description:
                      "I then designed the dream space in tinkercad which is a 3d modeling software. This helped me learn how to design 3d objects and helped me learn the mechanics of 3d modeling. I learned how to scale objects and fit them into a 3 dimensional space",
                    image: "/images/dream-space/House.jpeg",
                    title: "Furnishing Interior",
                    imageTitle: "Furniture in my Room",
                  },
                ],
              })}
            />

            <Route
              path="/project/microbit"
              exact
              Component={Project.bind(this, {
                title: <MicrobitHeader />,
                images: [
                  "/images/microbit/Microbit.png",
                  "/images/microbit/Microbit2.png",
                  "/images/microbit/Microbit3.png",
                ],
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati ut, tempore consectetur non distinctio quasi error vitae officiis voluptatum dolor debitis ipsa accusantium vel tempora enim iste! Exercitationem, corrupti!",
                processInfo: [
                  {
                    description:
                      "I started by making a floor plan for my dream space. This included elements like doors, toilets, sinks, walls, shelfs, tables, etc. This helped me understand the scaling of my dream space and how big everything should be",
                    image: "/images/microbit/Microbit.png",
                    title: "Game design",
                    imageTitle: "My game",
                  },
                  {
                    description:
                      "I then designed the dream space in tinkercad which is a 3d modeling software. This helped me learn how to design 3d objects and helped me learn the mechanics of 3d modeling. I learned how to scale objects and fit them into a 3 dimensional space",
                    image: "/images/microbit/Microbit2.png",
                    title: "Coding",
                    imageTitle: "Some of the code",
                  },
                ],
              })}
            />
            <Route
              path="/project/circuit"
              exact
              Component={Project.bind(this, {
                title: <CircuitHeader />,
                images: [
                  "/images/circuit/circuit1.png",
                  "/images/circuit/circuit2.png",
                  "/images/circuit/circuit3.png",
                  "/images/circuit/circuit4.png",
                  "/images/circuit/circuit5.png",
                  "/images/circuit/circuit6.png",
                  "/images/circuit/circuit7.png",
                  "/images/circuit/circuit8.png",
                ],
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati ut, tempore consectetur non distinctio quasi error vitae officiis voluptatum dolor debitis ipsa accusantium vel tempora enim iste! Exercitationem, corrupti!",
                processInfo: [
                  {
                    description:
                      "I started by making a floor plan for my dream space. This included elements like doors, toilets, sinks, walls, shelfs, tables, etc. This helped me understand the scaling of my dream space and how big everything should be",
                    image: "/images/circuit/circuit2.png",
                    title: "Wires",
                    imageTitle: "Soldering Wires",
                  },
                  {
                    description:
                      "I then designed the dream space in tinkercad which is a 3d modeling software. This helped me learn how to design 3d objects and helped me learn the mechanics of 3d modeling. I learned how to scale objects and fit them into a 3 dimensional space",
                    image: "/images/circuit/circuit8.png",
                    title: "Components",
                    imageTitle: "Adding all the components",
                  },
                  {
                    description:
                      "I then designed the dream space in tinkercad which is a 3d modeling software. This helped me learn how to design 3d objects and helped me learn the mechanics of 3d modeling. I learned how to scale objects and fit them into a 3 dimensional space",
                    image: "/images/circuit/circuit5.png",
                    title: "Tinkercad",
                    imageTitle: "Circuit Diagram",
                  },
                ],
              })}
            />
            <Route
              path="/project/bottle-rocket"
              exact
              Component={Project.bind(this, {
                title: <BottleRocketHeader />,
                images: [
                  "/images/pop-bottle-rocket/roket7.png",
                  "/images/pop-bottle-rocket/roket2.png",
                  "/images/pop-bottle-rocket/roket3.png",
                  "/images/pop-bottle-rocket/roket4.png",
                  "/images/pop-bottle-rocket/roket5.png",
                  "/images/pop-bottle-rocket/roket6.png",
                ],
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati ut, tempore consectetur non distinctio quasi error vitae officiis voluptatum dolor debitis ipsa accusantium vel tempora enim iste! Exercitationem, corrupti!",
                processInfo: [
                  {
                    description:
                      "I started by making a floor plan for my dream space. This included elements like doors, toilets, sinks, walls, shelfs, tables, etc. This helped me understand the scaling of my dream space and how big everything should be",
                    image: "/images/pop-bottle-rocket/roket2.png",
                    title: "Building Body of Rocket",
                    imageTitle: "Chipboard body",
                  },
                  {
                    description:
                      "I then designed the dream space in tinkercad which is a 3d modeling software. This helped me learn how to design 3d objects and helped me learn the mechanics of 3d modeling. I learned how to scale objects and fit them into a 3 dimensional space",
                    image: "/images/pop-bottle-rocket/roket6.png",
                    title: "Nose cone",
                    imageTitle: "My Elliptical Nose Cone",
                  },
                  {
                    description:
                      "I then designed the dream space in tinkercad which is a 3d modeling software. This helped me learn how to design 3d objects and helped me learn the mechanics of 3d modeling. I learned how to scale objects and fit them into a 3 dimensional space",
                    image: "/images/pop-bottle-rocket/roket5.png",
                    title: "Nose cone",
                    imageTitle: "My Tapered Swept Fins",
                  },
                ],
              })}
            />
            <Route
              path="/project/banner"
              exact
              Component={Project.bind(this, {
                title: <BannerHeader />,
                images: [
                  "/images/banner/Banner_timeline.png",
                  "/images/banner/Banner2.png",
                  "/images/banner/Banner1.png",
                ],
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati ut, tempore consectetur non distinctio quasi error vitae officiis voluptatum dolor debitis ipsa accusantium vel tempora enim iste! Exercitationem, corrupti!",
                processInfo: [
                  {
                    description:
                      "I started by making a floor plan for my dream space. This included elements like doors, toilets, sinks, walls, shelfs, tables, etc. This helped me understand the scaling of my dream space and how big everything should be",
                    image: "/images/banner/Banner2.png",
                    title: "Elements That Represent Me",
                    imageTitle: "Circuits and Binary",
                  },
                  {
                    description:
                      "I then designed the dream space in tinkercad which is a 3d modeling software. This helped me learn how to design 3d objects and helped me learn the mechanics of 3d modeling. I learned how to scale objects and fit them into a 3 dimensional space",
                    image: "/images/banner/Banner1.png",
                    title: "Finishing Banner",
                    imageTitle: "All My Layers",
                  },
                ],
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
