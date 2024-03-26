import React, { useLayoutEffect, useMemo } from "react";
import "./Notes.css";
import { motion } from "framer-motion";
import { NotesData, transition } from "../../Data/Data";

const Notes = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderNotes = useMemo(() => {
    return NotesData.map((item, index) => {
      return (
        <div
          key={index}
          className="gridCard flex items-center justify-between rounded-xl p-5"
        >
          <div className="flex flex-col items-start justify-center text-start ">
            <h5 className="cardText my-4">
              <span>{item.title}</span>
            </h5>
            <p className="navText">
              <span>{item.description}</span>
            </p>
          </div>
          <div className="flex justify-center items-center bg-deep-orange-200">
            <img src="https://www.seanhalpin.xyz/notes/chatgpt/icon.png"></img>
          </div>
        </div>
      );
    });
  }, []);

  return (
    <main className="wrapper mb-20">
      <motion.section
        className="container mx-auto"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <div className="notes-container grid grid-cols-1 my-20">
          <div className="text-center">
            <span className="title">Notes.</span>
          </div>

          <div className="text-center mb-5 px-2 p-10">
            <p className="bodyText mt-4">
              <span>
                Some thoughts, reflections, & notes on design and development,
                <br></br> along with some latest work in progress.
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 px-4 text-center">
          {NotesData.length > 0 ? renderNotes : <NoDataFoundText />}
        </div>
      </motion.section>
    </main>
  );
};

const NoDataFoundText = () => {
  return (
    <div>
      <h1 className="subtitle">Nothing to see here</h1>
    </div>
  );
};

export default React.memo(Notes);
