import MotionWrapper from "../../Components/common/MotionWrapper";
import DynamicIsland from "../../Components/common/DynamicIsland";
import PageTitle from "../../Components/common/PageTitle";

const React = () => {
  return (
    <MotionWrapper>
      <DynamicIsland />
      <PageTitle title="React." />
    </MotionWrapper>
  );
};

export default React;
