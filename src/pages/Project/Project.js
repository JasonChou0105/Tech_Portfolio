import "./Project.css";
import "../../App.css";
import Overview from "../../components/Project/Overview/Overview";
import Process from "../../components/Project/Process/Process";

function Project({
  title,
  subheader,
  images,
  description,
  processInfo,
  video,
}) {
  console.log(processInfo);
  return (
    <div className="project-container">
      <Overview
        title={title}
        subheader={subheader}
        images={images}
        description={description}
        video={video}
      />
      <Process processInfo={processInfo} />
    </div>
  );
}

export default Project;
