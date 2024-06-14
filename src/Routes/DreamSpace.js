import React from "react";
import { Route } from "react-router-dom";
import DreamSpaceHeader from "../components/PageHeaders/DreamSpaceHeader/DreamSpaceHeader";
import Project from "../pages/Project/Project";

function DreamSpace() {
  return (
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
            title: "Build",
            imageTitle: "Physical model",
          },
        ],
      })}
    />
  );
}

export default DreamSpace;
