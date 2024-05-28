import "./style.css";
import MotionWrapper from "../../Components/common/MotionWrapper";
import CardComponent from "../../Components/common/CardComponent";
import PageTitle from "../../Components/common/PageTitle";
import { technologies } from "../../Data/Data";
import DynamicIsland from "../../Components/common/DynamicIsland";

const Work = () => {
  return (
    <>
      <MotionWrapper>
        <DynamicIsland />
        <PageTitle
          title="Hi. i'am Manish."
          title2="An Engineer."
          work={true}
          workSecond={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <CardComponent data={technologies.slice(0, 4)} />
        </div>
        <PageTitle
          title="In progress."
          title2=""
          work={false}
          inProgress={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <CardComponent data={technologies.slice(4, 6)} />
        </div>
      </MotionWrapper>
    </>
  );
};

export default Work;
