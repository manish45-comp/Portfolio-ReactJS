import { useEffect, useMemo } from "react";
import "./Notes.css";
import { NotesData } from "../../Data/Data";
import MotionWrapper from "../../Components/common/MotionWrapper";
import PageTitle from "../../Components/common/PageTitle";
import { scrollToTop } from "../../utils/helper";
import { renderNotes } from "../../utils/utils";

const Notes = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const memorizedNotes = useMemo(() => renderNotes(NotesData), []);

  return (
    <MotionWrapper>
      <PageTitle title="Notes" notes={true} />
      <div className="grid grid-cols-1 gap-10 px-4 text-center">
        {NotesData.length > 0 ? memorizedNotes : <NoDataFoundText />}
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
