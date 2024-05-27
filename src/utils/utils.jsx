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
      <motion.div
        whileHover={{ y: -10 }}
        className={`grid ${item.rowWidth ? "grid-cols-1" : "grid-cols-8"} `}
      >
        <div
          className={`text-start span-1 flex flex-col justify-center ${
            item.rowWidth ? "" : "col-start-1 col-end-6"
          }`}
        >
          <Typography sx={{ marginBlock: 2 }} variant="h5">
            <span className="cardText">{item.title}</span>
          </Typography>
          <Typography sx={{ marginBlock: 2 }}>
            <span className="navText">{item.description}</span>
          </Typography>
        </div>
        <div
          className={` span-1 overflow-hidden flex items-center justify-center ${
            item.rowWidth ? "" : "col-start-6 col-end-9"
          }`}
        >
          <img
            className={`shot  ${
              item.rowWidth ? "rounded-xl" : "rounded-full"
            }  `}
            src={item.imgPath}
          ></img>
        </div>
      </motion.div>
    </motion.div>
  ));
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
