import TopicTile from "./TopicTile/TopicTile";
import "./Topics.css";

function Topics() {
  return (
    <div className="root-container">
      <div className="topics-header">Topics Explored Thoughout This Course</div>
      <div className="topics-sub-header">All The Concepts I Learned</div>
      <div className="topics-container">
        <TopicTile image="Engineering.png">Engineering</TopicTile>
        <TopicTile image="Coding.png">Coding</TopicTile>
        <TopicTile image="Science.png">Science</TopicTile>
        <TopicTile image="Design.png">Design</TopicTile>
      </div>
    </div>
  );
}

export default Topics;
