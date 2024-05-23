import "./Skills.css";
import { useEffect, useMemo } from "react";
import { skillsArray } from "../../Data/Data";
import MotionWrapper from "../../Components/common/MotionWrapper";
import PageTitle from "../../Components/common/PageTitle";
import { Typography } from "@mui/material";
import { scrollToTop } from "../../utils/helper";
import { motion } from "framer-motion";

const Play = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const renderSkills = useMemo(() => {
    return skillsArray.map((item, index) => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        key={index}
        className={`${
          item.rowWidth ? "col-span-2 row-span-2" : "col-span-2 row-span-1"
        } rounded-xl p-10 gridCard`}
      >
        <div
          className={`flex justify-center items-center ${
            item.rowWidth ? "flex-col" : "flex-row"
          } `}
        >
          <div className="text-start">
            <Typography sx={{ marginBlock: 2 }} variant="h5">
              <span className="cardText">{item.title}</span>
            </Typography>
            <Typography sx={{ marginBlock: 2 }}>
              <span className="navText">{item.description}</span>
            </Typography>
          </div>
          <div className="rounded-full">
            <img className="" src={item.imgPath}></img>
          </div>
        </div>
      </motion.div>
    ));
  }, []);

  return (
    <>
      <MotionWrapper>
        <PageTitle title="Skills" skills={true} />
        <div className="showcase py-4">{renderSkills}</div>
      </MotionWrapper>
    </>
  );
};

export default Play;
