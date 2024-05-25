import { motion } from "framer-motion";
import { Card, Chip, Typography } from "@mui/material";

export const renderSkills = (skillsArray) => {
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
};

export const renderCourses = (Courses) => {
  return Courses.map((item, index) => (
    <div
      key={index}
      className={`mb-3 md:mb-0 cardBg row-start-${item.rs} row-end-${item.re} col-start-${item.cs} col-end-${item.ce} rounded-full p-5 flex flex-row items-start justify-between`}
    >
      <p className="eduName flex text-start flex-col">
        <span className="bodyText">{item.course}</span>
        <span className="bodyText">{item.description}</span>
      </p>
      <p className="bodyText inverted my-auto">
        <span>{item.duration}</span>
      </p>
    </div>
  ));
};

export const renderProcess = (MyProcess) => {
  return MyProcess.map((item, index) => {
    return (
      <div key={index} className="span-1">
        <h1 className="id text-3xl opa1city-50">
          <span>{item.id}</span>
        </h1>
        <h3 className="subtitle-secondary my-4">
          <span>{item.title}</span>
        </h3>
        <p className="bodyText processText my-5">
          <span>{item.description}</span>
        </p>
      </div>
    );
  });
};

export const renderAboutME = (AboutME) => {
  return AboutME.map((item, index) => {
    return (
      <div key={index} className="mb-4">
        <p className="bodyText text-start">
          <span>{item.text}</span>
        </p>
      </div>
    );
  });
};

export const renderImages = (AboutImages, handleOpen, setPath) => {
  return AboutImages.map((item, index) => {
    return (
      <Card
        sx={{ padding: 0, borderRadius: 4 }}
        key={index}
        className={`bg-transparent shadow-none mb-4 md:mb-0 flex items-center justify-item-streach col-span-${item.colWidth}`}
        onClick={() => {
          handleOpen();
          setPath(item.path);
        }}
      >
        <div className="image-wrapper">
          <img className="rounded-lg w-100" src={item.path}></img>
          <div className="w-100 image-info">
            <Chip variant="contained" color="info" label={item.location} />
          </div>
        </div>
      </Card>
    );
  });
};

export const renderNotes = (NotesData) => {
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
};
