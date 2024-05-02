import React, { useRef, useState } from "react";
import "./TopicTile.css";
import { useInViewport } from "react-in-viewport";

function TopicTile({ children, image }) {
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
        <img
          src={`/images/topics/${image}`}
          alt={children}
          className="topic-image "
        />
      </div>
      <div className="topic-description-container">{children}</div>
    </section>
  );
}

export default TopicTile;
