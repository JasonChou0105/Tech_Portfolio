import React from "react";
import { Route } from "react-router-dom";
import Project from "../pages/Project/Project";

function Microbit() {
  return (
    <Route
      path="/project/microbit"
      exact
      Component={Project.bind(this, {
        title: <Microbit />,
        images: [
          "/images/dream-space/House.jpeg",
          "/images/dream-space/House2.jpeg",
          "/images/microbit/Microbit.png",
        ],
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis obcaecati ut, tempore consectetur non distinctio quasi error vitae officiis voluptatum dolor debitis ipsa accusantium vel tempora enim iste! Exercitationem, corrupti!",
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
            image: "/images/dream-space/tinkercad.jpeg",
            title: "Tinkercad",
            imageTitle: "Model of my dream floor on Tinkercad",
          },
        ],
      })}
    />
  );
}

export default Microbit;
