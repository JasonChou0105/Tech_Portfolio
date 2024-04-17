import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import { Link } from "react-router-dom";

const WorkIcon = () => <></>;

function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#004781",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #004781" }}
        date="2011 - present"
        iconStyle={{
          background: "#004781",
          color: "#fff",
        }}
        icon={<WorkIcon />}
      >
        <Link to="/project" className="link">
          <h3 className="vertical-timeline-element-title">
            Dream Room Project
          </h3>
          <p className="subtext">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="img-container">
            <img
              className="image"
              src="/images/House.jpeg"
              alt="Dream room project"
            />
          </div>
        </Link>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#6e0d00", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #6e0d00" }}
        date="2011 - present"
        iconStyle={{ background: "#6e0d00", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <Link to="/project" className="link">
          <h3 className="vertical-timeline-element-title">Microbit Project</h3>
          <p className="subtext">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="img-container">
            <img
              className="image"
              src="/images/Microbit.png"
              alt="Microbit game project"
            />
          </div>
        </Link>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#004781",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #004781" }}
        date="2011 - present"
        iconStyle={{
          background: "#004781",
          color: "#fff",
        }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Dream Room Project</h3>
        <p className="subtext">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          veritatis, facilis iure magnam maxime sed id, culpa asperiores fuga
          corrupti quisquam quidem ab qui. Est expedita non voluptate quam unde?
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#6e0d00", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #6e0d00" }}
        date="2011 - present"
        iconStyle={{ background: "#6e0d00", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Microbit Project</h3>
        <p className="subtext">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          veritatis, facilis iure magnam maxime sed id, culpa asperiores fuga
          corrupti quisquam quidem ab qui. Est expedita non voluptate quam unde?
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
