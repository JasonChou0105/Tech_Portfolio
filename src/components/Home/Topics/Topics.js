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
          <TopicTile image="Engineering.png" topic="Engineering">
            Engineering was explored through building a pop bottle rocket,
            construction of my dream space, and making a flashing circuit. I
            learned how to use a solder, hot glue gun, vinyl and exacto knives.
          </TopicTile>
          <TopicTile image="Coding.png" topic="Coding">
            Coding was explored through the Microbit game project and this
            portfolio project. I learned more about python, as well as the
            Microbit framework, and I learned React.js for this portfolio.
          </TopicTile>
        </div>
        <div className="topics-subcontainer">
          <TopicTile image="Science.png" topic="Science">
            I learned more about science through the pop bottle rocket project,
            as well as the flashing circuit project. I learned about
            aerodynamics from the bottle rocket, and learned about current from
            the circuits.
          </TopicTile>
          <TopicTile image="Design.png" topic="Design">
            Design was utilized in this course through the pop bottle rocket,
            where I had to design the rocket, The dreams space, where I used
            tinkercad to design a floorplan, and the banner, where used photopea
            to learn about graphic design
          </TopicTile>
        </div>
      </div>
    </div>
  );
}

export default Topics;
