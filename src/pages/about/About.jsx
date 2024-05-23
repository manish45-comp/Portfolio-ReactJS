import "./About.css";
import { useMemo } from "react";
import MotionWrapper from "../../Components/common/MotionWrapper";
import { scrollToTop } from "../../utils/helper";
import { useEffect, useState } from "react";
import { Courses, MyProcess, AboutME, AboutImages } from "../../Data/Data";
import {
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import {
  renderCourses,
  renderProcess,
  renderImages,
  renderAboutME,
} from "../../utils/utils";

import { SpotifyLogo, profile } from "../../utils/links";

const About = () => {
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    scrollToTop();
  }, []);

  const memorizesCourses = useMemo(() => renderCourses(Courses), []);
  const memorizesProcess = useMemo(() => renderProcess(MyProcess), []);
  const memorizesAboutMe = useMemo(() => renderAboutME(AboutME), []);
  const memorizesImages = useMemo(
    () => renderImages(AboutImages, handleOpen, setPath),
    []
  );

  return (
    <>
      <MotionWrapper>
        <div className="about-container grid grid-cols-1">
          <div className="text-center mb-0">
            <h1>
              <span className="title">i&apos;am Manish.</span>
            </h1>
          </div>
          <div className="my-20 grid grid-cols-1 md:grid-cols-2 p-5">
            <Card className="w-72 md:w-96 h-min mx-auto rounded-large">
              <CardContent sx={{ padding: 0 }} className="m-0 profile-wrapper">
                <img className="mt-10" src={profile} alt="profile-picture" />
              </CardContent>
              <CardActions sx={{ padding: 0, display: "flex" }}>
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
              </CardActions>
            </Card>

            <div className="grid grid-cols-1 mt-10 text-start px-4">
              <h2 className="subtitle">
                <span>
                  An aspiring developer from Pune, a hub of knowledge.
                </span>
              </h2>
              <p className="py-4">
                <span className="bodyText">
                  Over the past 4+ years, I&apos;ve gained knowledge in various
                  areas of digital design, including front-end development, Java
                  Dev. and Spring Boot Dev. I&apos;m proud to have worn many
                  hats.
                </span>
              </p>
            </div>
          </div>
          {/* My Education Section */}
          <div className="grid grid-cols-1 gap-5 px-4 ">{memorizesCourses}</div>
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
                we found it for future generations; my goal is to contribute to
                those ideals in whatever way I can. If you feel the same,
                I&apos;d love to talk.
              </span>
            </p>
          </div>
          {/* My Process Section */}
          <div className="process grid grid-cols-1 gap-10 md:gap-40 md:grid-cols-2  sm:rounded-3xl mt-10 p-10 shadow-sm">
            {memorizesProcess}
          </div>
          {/* My Process Section */}

          {/* About Me Section */}
          <div className=" flex items-center justify-center mt-20 px-5">
            <div className="contain px-2 w-96">{memorizesAboutMe}</div>
          </div>
          {/* About Me Section */}
          <div className="flex flex-col justify-center items-streach md:flex-row px-2 mt-10 gap-5">
            {memorizesImages}
          </div>
        </div>
      </MotionWrapper>
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            zIndex: 999999,
            borderRadius: "1rem",
          },
        }}
        maxWidth="md"
        open={open}
        onClose={handleClose}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <Close />
        </IconButton>

        <DialogContent sx={{ padding: 0 }} className="rounded-xl">
          <img
            alt="image"
            className="h-[48rem] w-full rounded-sm object-contain"
            src={path}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default About;
