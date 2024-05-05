import React, { useRef, useState } from "react";
import "./TopicTile.css";
import { useInViewport } from "react-in-viewport";
import { Link } from "react-router-dom";

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
      <Link to={to} className="link">
        <div className="topic-image-container">
          <img
            src={`/images/topics/${image}`}
            alt={children}
            className="topic-image "
          />
        </div>
        <div className="topic-description-container">{children}</div>
      </Link>
    </section>
  );
}

export default TopicTile;
