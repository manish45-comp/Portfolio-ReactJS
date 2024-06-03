import MotionWrapper from "../../Components/common/MotionWrapper";
import DynamicIsland from "../../Components/common/DynamicIsland";
import PageTitle from "../../Components/common/PageTitle";
import ProjectsCard from "../../Components/common/ProjectsCard";
import { ReactProjects, FigmaProjects } from "../../Data/Data";
import { Link, useParams } from "react-router-dom";

const Projects = () => {
  const { type } = useParams();

  const renderContent = () => {
    switch (type) {
      case "react":
        return (
          <div>
            <PageTitle title="React." react={true} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  p-2">
              {ReactProjects.map((project) => {
                return <ProjectsCard project={project} key={project.title} />;
              })}
            </div>
          </div>
        );
      case "html":
        return (
          <div>
            <PageTitle title="Html Css JS." html={true} />
          </div>
        );
      case "spring":
        return (
          <div>
            <PageTitle title="Spring Boot." spring={true} />
          </div>
        );
      case "figma":
        return (
          <div>
            <PageTitle title="Figma." figma={true} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  p-2">
              {FigmaProjects.map((project) => {
                return <ProjectsCard project={project} key={project.title} />;
              })}
            </div>
          </div>
        );

      default:
        return (
          <div>
            <PageTitle title="No Projects." />
            <div className="text-center">
              <Link to="/" className="btn-primary">
                Home
              </Link>
            </div>
          </div>
        );
    }
  };

  return (
    <MotionWrapper>
      <DynamicIsland />
      {renderContent()}
    </MotionWrapper>
  );
};

export default Projects;
