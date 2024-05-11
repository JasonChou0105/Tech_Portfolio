import React, { useRef, useState } from "react";
import "./TopicTile.css";
import { useInViewport } from "react-in-viewport";

function TopicTile({ children, image, to }) {
  const myRef = useRef();
  const [visable, setVisable] = useState(false);
  const { inViewport } = useInViewport(myRef);

  if (inViewport && !visable) {
    setVisable(true);
  }

  return (
    <section
      ref={myRef}
      className={`topic-tile-container ${visable && "visable"}`}
    >
      <div className="topic-image-container">
        <div
          className="topic-image"
          style={{
            background: `url("/images/topics/${image}") no-repeat center
              center`,
          }}
        />
        <div className="topic-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio
          aperiam unde tempore vel nam aut minima rem temporibus commodi! Rerum
          maxime ipsam repellat amet ipsum? Possimus minima quidem animi?
        </div>
      </div>
      <div className="topic-description-container">{children}</div>
    </section>
  );
}

export default TopicTile;
