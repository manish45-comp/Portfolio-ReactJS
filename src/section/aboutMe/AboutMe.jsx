import { useMemo } from "react";
import { renderAboutME } from "../../utils/utils";
import { AboutME } from "../../Data/Data";

const AboutMe = () => {
  const memorizesAboutMe = useMemo(() => renderAboutME(AboutME), []);

  return (
    <div className=" flex items-center justify-center mt-20 px-5">
      <div className="contain px-2 w-96">{memorizesAboutMe}</div>
    </div>
  );
};

export default AboutMe;
