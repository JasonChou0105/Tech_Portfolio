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
                  "In the dream space project we were assigned to make a hand-drawn floor plan of our dream space, model it in tinkercad, and then build it. I learned skills like how to scale things down, how to use tinkercad to 3d model, and how to do things like cut foam boards and hot glue. I also learned how to draw floor plans as well as all the components in them like doors, tables, beds, etc.",
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
                  "In this project, we had to design a microbit game with the python editor. We first started by doing several smaller projects with tutorials to get us used to the syntax. When it comes time to make our own game. I learned a lot about the micro bit framework and learned how to overcome the challenges I encountered such as it being asynchronous.",
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
                video: "/images/circuit/circuit.MOV",
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
                  "/images/pop-bottle-rocket/roket9.jpg",
                  "/images/pop-bottle-rocket/roket8.jpg",
                  "/images/pop-bottle-rocket/roket10.png",
                ],
                description:
                  "For this project we were told to research rocket components and how to make them fly better, draw rocket diagrams, and then use that knowledge to create our own pop bottle rocket based on our best diagram. I learned alot about how each part of the rocket is vital to a stable flight and how they do their job as well as the principles of aerodynamics. This helped me make more informed decisions when deciding how to make my rocket.",
                processInfo: [
                  {
                    description:
                      "The first thing I did was research about rocket components. This included things like the nose cone, fins, center of gravity, center of pressure, causes of failure and more. I made a graph about the resistance of all the nose cones, the pros and cons of the different fin shapes, and notes on center of gravity and pressure.",
                    image: "/images/pop-bottle-rocket/roket10.png",
                    title: "Research",
                    imageTitle: "My Research Doc",
                  },
                  {
                    description:
                      "I then started on the rocket diagrams. I sketched out 4 but ended up choosing the design on the left. This rocket included an elliptical nose cone for minimal air resistance and tapered swept fins to increase air resistance at the back, making it more stable. I also designed an egg compartment and tried to keep it safe by making an airbag with the provided ziplock bag.",
                    image: "/images/pop-bottle-rocket/roket9.jpg",
                    title: "Sketches",
                    imageTitle: "My Sketches",
                  },
                  {
                    description:
                      "I then started by making the actual rocket itself. I started by making the body of the rocket with the same diameter as my bottle. This was wrapped with vinyl and designed to look like a shark. I then made the egg compartment to fit inside the body of the rocket which contained cotton balls and the airbag.",
                    image: "/images/pop-bottle-rocket/roket2.png",
                    title: "Building Body of Rocket",
                    imageTitle: "Chipboard body",
                  },
                  {
                    description:
                      "The final step was attaching the fins and the nose cone. I made the elliptical nose cone by stacking strips of chipboard on top of eachother and bending it to look like a nose cone. The fins were made with foam board and wrapped in vinyl to make it more visually pleasing, and make sure the aerodynamics of each fin were similar. I attached these components and the rocket was finished.",
                    image: "/images/pop-bottle-rocket/roket8.jpg",
                    title: "Attachments",
                    imageTitle: "My Elliptical Nose Cone",
                  },
                ],
                video: "/images/pop-bottle-rocket/roket.MOV",
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
                  "This assignment was to make a banner representing us and what we have done in this tech course with photopea. This banner would be used on our portfolio. Although I have never used this program before, I believe I learned alot about it from this project. One thing that happened was I lost some work that I spent a long time on before, but recreated it within 15 minutes, showing that I learned a lot more about the software.",
                processInfo: [
                  {
                    description:
                      "I started by figuring out what to put on my banner and how. I decided that I didn’t want something too complex as it shouldn’t draw attention away from the focus of the website, which is my name. I decided to add the 2 projects I really enjoyed which were the microbit project and the circuit project. The circuits are displayed by the background circuitry and the microbit is represented by the binary. I added the shadow to my name to further emphasize it.",
                    image: "/images/banner/Banner2.png",
                    title: "Elements That Represent Me",
                    imageTitle: "Circuits and Binary",
                  },
                  {
                    description:
                      "The next step was putting my idea onto photopea. This was very difficult at first as I was very unfamiliar with the software and didn’t know where to start but with some help and just playing around with it, I got the hang of it. One thing that happened was I lost some work that I spent a long time on before, but recreated it within 15 minutes, showing that I learned a lot more about the software.",
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
