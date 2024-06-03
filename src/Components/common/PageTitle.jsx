import PropTypes from "prop-types";

const PageTitle = ({
  title,
  title2,
  work,
  inProgress,
  skills,
  notes,
  notfound,
  about,
  react,
}) => {
  return (
    <div className="grid grid-cols-1 my-5 mt-16">
      <div className={`text-center ${work && "title_box"} relative`}>
        <h1>
          <span className="title">{title}</span>
          <span className="title">{title2}</span>
        </h1>
      </div>
      <div className="text-center mb-5 px-2 p-10">
        <p>
          {work && (
            <span className="bodyText">
              I&apos;m passionate about crafting experiences that are engaging,
              <br></br> accessible, and user-centric.
            </span>
          )}
          {about && (
            <span className="bodyText">
              A Computer Engineer passionate about ReactJS and object-oriented
              <br />
              languages like JavaScript and Java. I also enjoy FPS video games
              and excel at cricket.
            </span>
          )}
          {skills ? (
            <span className="bodyText">
              An array of skills and expertise I possess, tailored to be
              practical, <br />
              engaging, and occasionally a bit unconventional.
            </span>
          ) : (
            ""
          )}
          {notes && (
            <span className="bodyText">
              Some thoughts, reflections, & notes on design and development,
              <br></br> along with some latest work in progress.
            </span>
          )}
          {inProgress && (
            <span className="bodyText">
              Work in various states of design and development,
              <br />
              to in-flight product design and development.
            </span>
          )}
          {notfound && (
            <span className="bodyText">
              You&apos;ve taken a wrong turn somewhere. Let&apos;s get you back
              on track.
            </span>
          )}
          {react && (
            <span className="bodyText">
              Unleashing React Brilliance a Showcase of Captivating Projects
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
  title2: PropTypes.string,
  work: PropTypes.bool,
  workSecond: PropTypes.bool,
  skills: PropTypes.bool,
  notes: PropTypes.bool,
  inProgress: PropTypes.bool,
  notfound: PropTypes.bool,
  about: PropTypes.bool,
  react: PropTypes.bool,
};

export default PageTitle;
