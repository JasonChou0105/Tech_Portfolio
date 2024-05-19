import ShowWhenInViewport from "../../../ShowWhenInViewport";
import "./TopicTile.css";

function TopicTile({ children, image }) {
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
        <div className="topic-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae odio
          aperiam unde tempore vel nam aut minima rem temporibus commodi! Rerum
          maxime ipsam repellat amet ipsum? Possimus minima quidem animi?
        </div>
      </div>
      <div className="topic-description-container">{children}</div>
    </ShowWhenInViewport>
  );
}

export default TopicTile;
