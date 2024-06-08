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
            <p className="subtext">Designing and building a dream space.</p>
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
              Making a game with pythons microbit framework.
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
              Using electronics and circuitry to construct a flashing LED light
              circuit
            </p>
            <div className="img-container">
              <img
                className="image"
                src="/images/circuit/circuit1.png"
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
          <Link to="/project/bottle-rocket" className="link">
            <h3 className="vertical-timeline-element-title">
              Pop Bottle Rocket
            </h3>
            <p className="subtext">
              Applying principles of aerodynamics and propulsion to build a pop
              bottle rocket
            </p>
            <div className="img-container">
              <img
                className="image"
                src="/images/pop-bottle-rocket/roket.png"
                alt="Dream room project"
              />
            </div>
          </Link>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
