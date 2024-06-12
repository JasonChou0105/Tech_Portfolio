import "./Project.css";
import "../../App.css";
import Overview from "../../components/Project/Overview/Overview";
import Process from "../../components/Project/Process/Process";

function Project({
  title,
  subheader,
  images,
  description,
  processDescriptions,
}) {
  return (
    <div className="project-container">
      <Overview
        title={title}
        subheader={subheader}
        images={images}
        description={description}
      />
      <Process processDescriptions={processDescriptions} />
    </div>
  );
}

export default Project;
