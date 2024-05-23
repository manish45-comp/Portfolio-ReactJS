import { useEffect, useMemo } from "react";
import "./Notes.css";
import { NotesData } from "../../Data/Data";
import MotionWrapper from "../../Components/common/MotionWrapper";
import PageTitle from "../../Components/common/PageTitle";
import { scrollToTop } from "../../utils/helper";

const Notes = () => {
  useEffect(() => {
    scrollToTop();
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
    <MotionWrapper>
      <PageTitle title="Notes" notes={true} />

      <div className="grid grid-cols-1 gap-10 px-4 text-center">
        {NotesData.length > 0 ? renderNotes : <NoDataFoundText />}
      </div>
    </MotionWrapper>
  );
};

const NoDataFoundText = () => {
  return (
    <div>
      <h1 className="subtitle">Nothing to see here</h1>
    </div>
  );
};

export default Notes;
