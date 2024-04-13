import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <></>;

function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Dream Room Project</h3>
        <h4 className="vertical-timeline-element-subtitle">Febuary 23rd</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          veritatis, facilis iure magnam maxime sed id, culpa asperiores fuga
          corrupti quisquam quidem ab qui. Est expedita non voluptate quam unde?
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Dream Room Project</h3>
        <h4 className="vertical-timeline-element-subtitle">Febuary 23rd</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          veritatis, facilis iure magnam maxime sed id, culpa asperiores fuga
          corrupti quisquam quidem ab qui. Est expedita non voluptate quam unde?
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Microbit Project</h3>
        <h4 className="vertical-timeline-element-subtitle">March 3rd</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          veritatis, facilis iure magnam maxime sed id, culpa asperiores fuga
          corrupti quisquam quidem ab qui. Est expedita non voluptate quam unde?
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
