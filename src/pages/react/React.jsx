import MotionWrapper from "../../Components/common/MotionWrapper";
import DynamicIsland from "../../Components/common/DynamicIsland";
import PageTitle from "../../Components/common/PageTitle";
import ProjectsCard from "../../Components/common/ProjectsCard";
import { ReactProjects } from "../../Data/Data";

const React = () => {
  return (
    <MotionWrapper>
      <DynamicIsland />
      <PageTitle title="React." react={true} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  p-2">
        {ReactProjects.map((project) => {
          return <ProjectsCard project={project} key={project} />;
        })}
      </div>
    </MotionWrapper>
  );
};

export default React;
