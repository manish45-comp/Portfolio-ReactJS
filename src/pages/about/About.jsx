import "./About.css";

import MotionWrapper from "../../Components/common/MotionWrapper";
import { scrollToTop } from "../../utils/helper";
import { useEffect } from "react";

import { Card, CardActions, CardContent } from "@mui/material";

import { SpotifyLogo, profile } from "../../utils/links";
import PageTitle from "../../Components/common/PageTitle";
import CoursesSection from "../../section/courses/CoursesSection";
import ProcessSection from "../../section/process/ProcessSection";
import AboutMe from "../../section/aboutMe/AboutMe";
import ImageSection from "../../section/imageSection/ImageSection";

const About = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <MotionWrapper>
        <PageTitle title="i'am Manish" />
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
                  <span className="bodyText profileText">On repeat</span>
                  <span className="bodyText profileText">
                    I Wanna Be Yours by AM
                  </span>
                </p>
              </div>
            </CardActions>
          </Card>
          <div className="grid grid-cols-1 mt-10 text-start px-4">
            <h2 className="subtitle">
              <span>An aspiring developer from Pune, a hub of knowledge.</span>
            </h2>
            <p className="py-4">
              <span className="bodyText">
                Over the past 4+ years, I&apos;ve gained knowledge in various
                areas of digital design, including front-end development, Java
                Dev. and Spring Boot Dev. I&apos;m proud to have worn many hats.
              </span>
            </p>
          </div>
        </div>

        <CoursesSection />

        <div className="grid grid-cols-1 mt-20 text-start px-4 md:grid-cols-4">
          <div className="col-span-2"></div>
          <h1 className="col-span-2">
            <span className="subtitle">
              Let&apos;s collaborate if you&apos;re committed to sustainability,
              education, equality, or carbon neutrality.
            </span>
          </h1>
          <div className="col-span-2"></div>
          <p className="col-span-2 py-4">
            <span className="bodyText">
              I believe we should leave this Earth as good as or better than we
              found it for future generations; my goal is to contribute to those
              ideals in whatever way I can. If you feel the same, I&apos;d love
              to talk.
            </span>
          </p>
        </div>

        <ProcessSection />
        <AboutMe />
        <ImageSection />
      </MotionWrapper>
    </>
  );
};

export default About;
