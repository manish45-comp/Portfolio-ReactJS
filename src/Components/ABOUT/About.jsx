import "./About.css";
import profile from "../../images/Untitled-1.png";
import SpotifyLogo from "../../../src/images/spotify-png.png";
import React, { useMemo } from "react";

import {
  CardHeader,
  CardFooter,
  Chip,
  Dialog,
  DialogBody,
  IconButton,
  Card,
} from "@material-tailwind/react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Courses,
  MyProcess,
  AboutME,
  AboutImages,
  transition,
} from "../../Data/Data";

const About = () => {
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState(null);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  const renderCourses = useMemo(() => {
    return Courses.map((item, index) => (
      <div
        key={index}
        class={`gDiv p-5 rounded-full shadow-xl flex flex-row items-start justify-between div${item.id}`}
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
  }, [Courses]);

  const renderProcess = useMemo(() => {
    return MyProcess.map((item, index) => {
      return (
        <div key={index} className="span-1">
          <h1 className="id text-3xl opa1city-50">
            <span>{item.id}</span>
          </h1>
          <h3 className="subtitle-secondary my-4">
            <span>{item.title}</span>
          </h3>
          <p className="bodyText my-5">
            <span>{item.description}</span>
          </p>
        </div>
      );
    });
  }, [MyProcess]);

  const renderAboutME = useMemo(() => {
    return AboutME.map((item, index) => {
      return (
        <div key={index} className="mb-4">
          <p className="bodyText text-start">
            <span>{item.text}</span>
          </p>
        </div>
      );
    });
  });

  const renderImages = useMemo(() => {
    return AboutImages.map((item, index) => {
      return (
        <Card
          key={index}
          className={`bg-transparent shadow-none mb-4 p-0 flex items-center justify-start col-span-${item.colWidth}`}
          onClick={() => {
            handleOpen();
            setPath(item.path);
          }}
        >
          <div className="image-wrapper text-center">
            <img className="rounded-xl w-100" src={item.path}></img>
            <div className="w-100 image-info">
              <Chip
                className="navText inverted shadow-md"
                variant="gradient"
                color="teal"
                size="lg"
                value={item.location}
              ></Chip>
            </div>
          </div>
        </Card>
      );
    });
  });

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
          <div className="about-container grid grid-cols-1">
            <div className="text-center mb-0">
              <h1>
                <span className="title">i&apos;am Manish.</span>
              </h1>
            </div>
            <div className="my-20 grid grid-cols-1 md:grid-cols-2 p-5">
              <Card className="w-72 md:w-96 h-min mx-auto rounded-large">
                <CardHeader
                  floated={false}
                  className="m-0 profile-wrapper rounded-large"
                >
                  <img
                    className="rounded-t-full mt-10"
                    src={profile}
                    alt="profile-picture"
                  />
                </CardHeader>
                <CardFooter className="p-0 flex">
                  <div className="music-container music flex-1 flex items-center justify-stretch p-2">
                    <img
                      className="w-20 p-2 img-fluid music-logo"
                      src={SpotifyLogo}
                    />
                    <p className="flex flex-col items-start ps-5">
                      <span className="bodyText">On repeat</span>
                      <span className="bodyText">I Wanna Be Yours by AM</span>
                    </p>
                  </div>
                </CardFooter>
              </Card>

              <div className="grid grid-cols-1 mt-10 text-start px-4">
                <h2 className="subtitle">
                  <span>
                    An aspiring developer from Pune, a hub of knowledge.
                  </span>
                </h2>
                <p className="py-4">
                  <span className="bodyText">
                    Over the past 4+ years, I&apos;ve gained knowledge in
                    various areas of digital design, including front-end
                    development, Java Dev. and Spring Boot Dev. I&apos;m proud
                    to have worn many hats.
                  </span>
                </p>
              </div>
            </div>
            {/* My Education Section */}
            <div className="grid grid-cols-1 gap-5 px-4 ">{renderCourses}</div>
            {/* My Education Section */}
            <div className="grid grid-cols-1 mt-20 text-start px-4 md:grid-cols-4">
              <div className="col-span-2 "></div>
              <h1 className="col-span-2 ">
                <span className="subtitle">
                  Let&apos;s collaborate if you&apos;re committed to
                  sustainability, education, equality, or carbon neutrality.
                </span>
              </h1>

              <div className="col-span-2"></div>
              <p className="col-span-2 py-4">
                <span className="bodyText">
                  I believe we should leave this Earth as good as or better than
                  we found it for future generations; my goal is to contribute
                  to those ideals in whatever way I can. If you feel the same,
                  I&apos;d love to talk.
                </span>
              </p>
            </div>
            {/* My Process Section */}
            <div className="process grid grid-cols-1 gap-10 md:gap-40 md:grid-cols-2  sm:rounded-3xl mt-10 p-10 shadow-sm">
              {renderProcess}
            </div>
            {/* My Process Section */}
            {/* About Me Section */}
            <div className="grid grid-cols-1 items-center justify-center mt-20 px-5">
              <div className="contain px-4 md:px-96">{renderAboutME}</div>
            </div>
            {/* About Me Section */}
            <div className="pictures-container px-4 mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {renderImages}
            </div>
            <Dialog
              className="rounded-xl"
              size="xl"
              open={open}
              handler={handleOpen}
            >
              <IconButton
                className="bg-red-100 rounded-full border-0 float-end m-2 z-10"
                color="blue-gray"
                size="sm"
                variant="text"
                onClick={handleOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>

              <DialogBody className="rounded-xl">
                <img
                  alt="image"
                  className="h-[48rem] w-full rounded-sm object-contain"
                  src={path}
                />
              </DialogBody>
            </Dialog>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default React.memo(About);
