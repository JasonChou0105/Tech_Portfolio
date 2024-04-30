import React from "react";
import "./TopicTile.css";

function TopicTile({ children, image }) {
  return (
    <div className="topic-tile-container">
      <div className="topic-image-container">
        <img
          src={`/images/topics/${image}`}
          alt={children}
          className="topic-image"
        />
      </div>
      <div className="topic-description-container">{children}</div>
    </div>
  );
}

export default TopicTile;
