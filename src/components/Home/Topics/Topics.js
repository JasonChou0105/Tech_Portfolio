import TopicTile from "./TopicTile/TopicTile";
import "./Topics.css";

function Topics() {
  return (
    <div className="root-container">
      <div className="topics-header description-text-transition">
        Topics Explored Thoughout This Course
      </div>
      <div className="topics-sub-header description-text-transition">
        All The Concepts I Learned
      </div>
      <div className="topics-container">
        <div className="topics-subcontainer">
          <TopicTile image="Engineering.png">Engineering</TopicTile>
          <TopicTile image="Coding.png">Coding</TopicTile>
        </div>
        <div className="topics-subcontainer">
          <TopicTile image="Science.png">Science</TopicTile>
          <TopicTile image="Design.png">Design</TopicTile>
        </div>
      </div>
    </div>
  );
}

export default Topics;
