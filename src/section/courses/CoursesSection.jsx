const CoursesSection = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-8 md:grid-rows-4">
      <div className="cardBg col-span-1 md:col-start-5 md:col-end-9 md:row-start-1 md:row-end-2 rounded-xl p-5 flex flex-row items-start justify-between">
        <p className="eduName flex text-start flex-col">
          <span className="bodyText">BE Computer</span>
          <span className="bodyText">
            KJ College of Engineer and Management Research
          </span>
        </p>
        <p className="bodyText inverted my-auto">
          <span>18-21</span>
        </p>
      </div>

      <div className="cardBg col-span-1 md:col-start-2 md:col-end-6 md:row-start-3 md:row-end-4 rounded-xl p-5 flex flex-row items-start justify-between">
        <p className="eduName flex text-start flex-col">
          <span className="bodyText">HSC Board</span>
          <span className="bodyText">Gopinath Vidhylay</span>
        </p>
        <p>
          <span className="bodyText inverted my-auto">17-18</span>
        </p>
      </div>

      <div className="cardBg col-span-1 md:col-start-1 md:col-end-5 md:row-start-4 md:row-end-5 rounded-xl p-5 flex flex-row items-start justify-between">
        <p className="eduName flex text-start flex-col">
          <span className="bodyText">SSC Board</span>
          <span className="bodyText">Nagnath Vidhylay</span>
        </p>
        <p>
          <span className="bodyText inverted my-auto">14-15</span>
        </p>
      </div>

      <div className="cardBg col-span-1 md:col-start-3 md:col-end-7 md:row-start-2 md:row-end-3 rounded-xl p-5 flex flex-row items-start justify-between">
        <p className="eduName flex text-start flex-col">
          <span className="bodyText">React Developer Intern.</span>
          <span className="bodyText">S2Tab Private Limited</span>
        </p>
        <p>
          <span className="bodyText inverted my-auto">Current</span>
        </p>
      </div>
    </div>
  );
};

export default CoursesSection;
