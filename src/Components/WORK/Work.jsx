import React, { useEffect, useMemo } from "react";
import CardComponent from "../CARDS/CardComponent";

import { motion } from "framer-motion";
import PropType from "prop-types";

import "./Work.css";
import { technologies, transition } from "../../Data/Data";

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
          <div className="work-container grid grid-cols-1 my-20">
            <div className="text-center">
              <h1>
                <span className="title">Hi. i&apos;am Manish.</span>
                <span className="title">A Engineer.</span>
              </h1>
            </div>

            <div className="text-center mb-5 px-2 p-10">
              <p className="bodyText">
                <span>
                  I&apos;m passionate about crafting experiences that are
                  engaging,<br></br> accessible, and user-centric.
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <CardComponent data={technologies.slice(0, 4)} />
          </div>

          <div className="work-container grid grid-cols-1 my-20">
            <div className="text-center">
              <h1>
                <span className="title">In Progress.</span>
              </h1>
            </div>

            <div className="text-center mb-5 px-2 p-10">
              <p className="bodyText">
                <span>
                  Work in various states of design and development,
                  <br />
                  to in-flight product design and development.
                </span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3">
            <CardComponent data={technologies.slice(4, 6)} />
          </div>
        </motion.section>
      </main>
    </>
  );
};

Work.PropType = {
  technologies: PropType.array.isRequired,
  transition: PropType.object.isRequired,
};

export default React.memo(Work);
