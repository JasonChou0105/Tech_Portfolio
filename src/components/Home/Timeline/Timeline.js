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
    <div>
      <div className="timeline-header">Timeline of All my Projects</div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background:
              "radial-gradient(circle, rgba(0,69,152,1) 0%, rgba(0,56,117,1) 50%, rgba(1, 50, 129, 1) 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #004781" }}
          date="2011 - present"
          iconStyle={{
            background:
              "radial-gradient(circle, rgba(0,69,152,1) 0%, rgba(0,56,117,1) 50%, rgba(0,39,103,1) 100%)",
            color: "#fff",
          }}
          icon={<WorkIcon />}
        >
          <Link to="/project/dream-space" className="link">
            <h3 className="vertical-timeline-element-title">
              Dream Space Project
            </h3>
            <p className="subtext">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="img-container">
              <img
                className="image"
                src="/images/dream-space/House.jpeg"
                alt="Dream room project"
              />
            </div>
          </Link>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background:
              "radial-gradient(circle, rgba(152,0,0,1) 0%, rgba(117,0,0,1) 48%, rgba(101, 0, 0, 1) 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #6e0d00" }}
          date="2011 - present"
          iconStyle={{
            background:
              "radial-gradient(circle, rgba(152,0,0,1) 0%, rgba(117,0,0,1) 48%, rgba(78, 0, 0, 1) 100%)",
            color: "#fff",
          }}
          icon={<WorkIcon />}
        >
          <Link to="/project/microbit" className="link">
            <h3 className="vertical-timeline-element-title">
              Microbit Project
            </h3>
            <p className="subtext">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="img-container">
              <img
                className="image"
                src="/images/microbit/Microbit.png"
                alt="Microbit game project"
              />
            </div>
          </Link>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background:
              "radial-gradient(circle, rgba(0,69,152,1) 0%, rgba(0,56,117,1) 50%, rgba(1, 50, 129, 1) 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #004781" }}
          date="2011 - present"
          iconStyle={{
            background:
              "radial-gradient(circle, rgba(0,69,152,1) 0%, rgba(0,56,117,1) 50%, rgba(0,39,103,1) 100%)",
            color: "#fff",
          }}
          icon={<WorkIcon />}
        >
          <Link to="/project/circuit" className="link">
            <h3 className="vertical-timeline-element-title">Circuit</h3>
            <p className="subtext">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="img-container">
              <img
                className="image"
                src="/images/dream-space/House.jpeg"
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
          <h3 className="vertical-timeline-element-title">Microbit Project</h3>
          <p className="subtext">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            veritatis, facilis iure magnam maxime sed id, culpa asperiores fuga
            corrupti quisquam quidem ab qui. Est expedita non voluptate quam
            unde?
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
