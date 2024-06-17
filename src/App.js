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
                  "/images/dream-space/image7.jpg",
                  "/images/dream-space/image8.jpg",
                ],
                description:
                  "In the dream space project we were assigned to make a detailed, hand-drawn floor plan of our dream space. We used TinkerCAD to create a 3D model of our floor plan, scaling further if necessary. We then built a physical model of our dream space using materials such as cardboard, foam core board, or any other appropriate materials, ensuring that the model accurately represents the design from the drawn floor plan and TinkerCAD.",
                processInfo: [
                  {
                    description:
                      "I started by making a floor plan for my dream space. This included elements like doors, toilets, sinks, etc. I scaled this to have 1 grid square being a 1 x 1 foot square. I ended up designing a bunker-like room with all necessities for life, like a garden, storage, and of course, entertainment.",
                    image: "/images/dream-space/floor_plan.jpeg",
                    title: "Floor Plan",
                    imageTitle: "My Floor Plan",
                  },
                  {
                    description:
                      "I then designed the dream space in tinkercad which is a 3d modeling software. This helped me learn how to design 3d objects and helped me learn the mechanics of 3d modeling. I scaled this to be 1:12, one foot becoming 1 inch.",
                    image: "/images/dream-space/tinkercad.png",
                    title: "Tinkercad",
                    imageTitle: "Model of my dream floor on Tinkercad",
                  },
                  {
                    description:
                      "We then had to physically create our dream space. I used foam board to create the “skeleton” of my dream space and painted it and glued metal textures on the outside to make it seem more bunker-like. I then used hot glue to attach all the walls together, to finish the exterior. This physical build was scaled to be 1:16.",
                    image: "/images/dream-space/image8.jpg",
                    title: "Building Exterior",
                    imageTitle: `"Skeleton" of my Room`,
                  },
                  {
                    description:
                      "The next step was adding the furniture. This proved very difficult as I had to paint, cut out, and glue together very small pieces of foam board to create something that looked like furniture and I think it worked out rather pleasantly. 2 of the things I think worked out the best are the piano and the toilet. Both of them have a lot of attention to detail and the piano even has sheet music.",
                    image: "/images/dream-space/image7.jpg",
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
                  "In this project, we had to design a microbit game with the python editor. We first started by doing several smaller projects with tutorials to get us used to the syntax as well as how the microbit responds to our commands. When it comes time to make our own game, we can take inspiration and code from the previous games to make our own.",
                processInfo: [
                  {
                    description:
                      "When designing the game I was quite restricted by the microbit only being able to display a 5x5 grid and the lack of buttons. This rules out games that require a lot of space or detail. I opted for a simple game only needing two buttons where you move left and right to fit into the hole in a falling wall.",
                    image: "/images/microbit/Microbit.png",
                    title: "Game design",
                    imageTitle: "My game",
                  },
                  {
                    description:
                      "I first started by creating a 5x5 2d array to visualize the microbit, and creating a function to translate that to the microbit making it very easy to manipulate. Then I added a function for the falling walls. I generated a number which would serve as where the hole would be in the wall, and then the player whose position was stored in a variable and changed based on user input. I then added a second wall as I thought 1 was too easy, as well as an increase in speed intermittently. I then completed the game loop by adding a score counter and replay function.",
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
                  "For this project we were tasked to create a flashing LED circuit with components like resistors, transistors, and capacitors using a paper diagram. We then had to complete a series of circuit diagrams using tinkercad where we followed tutorials to create and learn about different types of circuits and how they worked.",
                processInfo: [
                  {
                    description:
                      "I started by hammering nails into a block of wood following the paper diagram. This would serve as what holds and elevates the whole circuit. I then connected the marked area with wires, allowing electricity to flow through it. It was important that all the nails were straight and all the wires were not touching where they were marked not to.",
                    image: "/images/circuit/circuit2.png",
                    title: "Wires",
                    imageTitle: "Soldering Wires",
                  },
                  {
                    description:
                      "The next step was to attach all the given components. This would complete the circuit as well as give it functionality. The resistors were used to limit the flow of electricity to prevent the LED bulb from burning out. The capacitors store energy until enough is able to power the bulb. The electricity is then able to pass because of the transistors.",
                    image: "/images/circuit/circuit8.png",
                    title: "Components",
                    imageTitle: "Adding all the components",
                  },
                  {
                    description:
                      "When making the circuit diagrams with tinkercad I learned about things like breadboards, potentiometers, and even a bit of coding. I made a circuit that prints a mothers day poem using c++’s  LiquidCrystal Library, a RGB mixer, and much more. ",
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
