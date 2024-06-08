import ShowWhenInViewport from "../../../ShowWhenInViewport";
import "./TopicTile.css";

function TopicTile({ children, image, topic }) {
  return (
    <ShowWhenInViewport className="topic-tile-container">
      <div className="topic-image-container">
        <div
          className="topic-image"
          style={{
            background: `url("/images/topics/${image}") no-repeat center
              center`,
          }}
        />
        <div className="topic-text">{children}</div>
      </div>
      <div className="topic-description-container">{topic}</div>
    </ShowWhenInViewport>
  );
}

export default TopicTile;
