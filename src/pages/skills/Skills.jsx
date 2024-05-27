import "./Skills.css";
import { useEffect, useMemo } from "react";
import MotionWrapper from "../../Components/common/MotionWrapper";
import PageTitle from "../../Components/common/PageTitle";
import { scrollToTop } from "../../utils/helper";
import { skillsArray } from "../../Data/Data";
import { renderSkills } from "../../utils/utils";

const Play = () => {
  useEffect(() => {
    // scrollToTop();
  }, []);

  const memoizedSkills = useMemo(() => renderSkills(skillsArray), []);

  return (
    <>
      <MotionWrapper>
        <PageTitle title="Skills" skills={true} />
        <div className="showcase py-4">{memoizedSkills}</div>
      </MotionWrapper>
    </>
  );
};

export default Play;
