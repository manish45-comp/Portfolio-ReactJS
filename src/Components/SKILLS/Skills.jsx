import "./Skills.css";

import React from "react";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { skillsArray, transition } from "../../Data/Data";

const Play = () => {
  const renderSkills = useMemo(() => {
    return skillsArray.map((item, index) => (
      <div
        key={index}
        class={`rounded-xl gridCard col-span-${item.colWidth} ${
          item.rowWidth && "row-span-2"
        } ${!item.rowWidth ? "" : "h-min"}`}
      >
        <div
          className={`px-5 flex ${
            !item.rowWidth
              ? "h-100 items-center justify-center"
              : "flex-col border justify-between items-center py-5"
          }`}
        >
          <div className="text-start p-2">
            <h5 className="cardText my-4">
              <span>{item.title}</span>
            </h5>
            <p className="navText">
              <span>{item.description}</span>
            </p>
          </div>
          <div className={`rounded-full`}>
            <img
              className={`${item.rowWidth ? "rounded-xl mt-3 p-5" : ""}`}
              src={item.imgPath}
            ></img>
          </div>
        </div>
      </div>
    ));
  }, [skillsArray]);

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="wrapper mb-20">
        <motion.section
          className="container mx-auto"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <div className="play-container grid grid-cols-1 mt-20">
            <div className="text-center">
              <motion.span className="title">Skills.</motion.span>
            </div>

            <div className="text-center mb-5 px-2 p-10">
              <p className="bodyText tracking-tight">
                <span>
                  A collection of tools and sites I've created, designed to be
                  helpful,<br></br> fun, & sometimes just a little bit weird.
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-4 gap-5 m-2">
              {renderSkills}
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default React.memo(Play);
