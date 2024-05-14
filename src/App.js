import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Project from "./pages/Project/Project";
import PageContainer from "./components/PageContainer/PageContainer";
import ScrollToTop from "./ScrollToTop";

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
                title: "Dream Space",
                subheader: "Designing and Building a Space",
                images: [
                  "/images/dream-space/House.jpeg",
                  "/images/dream-space/House2.jpeg",
                  "/images/microbit/Microbit.png",
                ],
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati ut, tempore consectetur non distinctio quasi error vitae officiis voluptatum dolor debitis ipsa accusantium vel tempora enim iste! Exercitatione",
              })}
            />
            <Route
              path="/project/microbit"
              exact
              Component={Project.bind(this, {
                title: "Microbit",
                image: "/images/microbit/Microbit.png",
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
