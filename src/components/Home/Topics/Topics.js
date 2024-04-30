import React from "react";
import TopicTile from "./TopicTile/TopicTile";
import "./Topics.css";

function Topics() {
  return (
    <div className="root-container">
      <div className="topics-header">Topics Explored Thoughout This Course</div>
      <div className="topics-container">
        <TopicTile>Engineering</TopicTile>
        <TopicTile>Coding</TopicTile>
        <TopicTile>Science</TopicTile>
        <TopicTile>Design</TopicTile>
      </div>
    </div>
  );
}

export default Topics;
