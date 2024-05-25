import { useMemo } from "react";
import { renderProcess } from "../../utils/utils";
import { MyProcess } from "../../Data/Data";

function ProcessSection() {
  const memorizesProcess = useMemo(() => renderProcess(MyProcess), []);

  return (
    <div className="process grid grid-cols-1 gap-10 md:gap-40 md:grid-cols-2  sm:rounded-3xl mt-10 p-10 shadow-sm">
      {memorizesProcess}
    </div>
  );
}

export default ProcessSection;
