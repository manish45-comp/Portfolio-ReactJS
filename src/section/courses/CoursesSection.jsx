import { useMemo } from "react";
import { renderCourses } from "../../utils/utils";
import { Courses } from "../../Data/Data";

const CoursesSection = () => {
  const memorizesCourses = useMemo(() => renderCourses(Courses), []);
  return (
    <div className="grid grid-cols-1">
      <div className="md:col-span-8 lg:hidden">{memorizesCourses}</div>
      <div className="gap-y-5 hidden lg:grid md:grid-cols-8 md:grid-rows-4">
        {memorizesCourses}
      </div>
    </div>
  );
};

export default CoursesSection;
