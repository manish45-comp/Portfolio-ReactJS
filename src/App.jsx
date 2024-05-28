import "./styles/global.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy } from "react";

const WorkComponent = lazy(() => import("./pages/home/Work.jsx"));
const AboutComponent = lazy(() => import("./pages/about/About.jsx"));
const SkillsComponent = lazy(() => import("./pages/skills/Skills.jsx"));
const NotesComponent = lazy(() => import("./pages/notes/Notes.jsx"));
const FooterComponent = lazy(() => import("./section/footer/Footer.jsx"));
const NotFoundComponent = lazy(() => import("./pages/Error404/NotFound.jsx"));

import CustomNavbar from "./section/header/CustomNavbar.jsx";
import Background from "./Components/common/Background.jsx";
import React from "./pages/react/React.jsx";
import Html from "./pages/html/Html.jsx";

function App() {
  const location = useLocation();
  return (
    <>
      <Background />
      <div className="app-container">
        <CustomNavbar />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route index element={<WorkComponent />}></Route>

            <Route path="/about" element={<AboutComponent />} />
            <Route path="/play" element={<SkillsComponent />} />
            <Route path="/note" element={<NotesComponent />} />
            <Route path="/react" element={<React />} />
            <Route path="/html" element={<Html />} />

            {/* fallback route */}
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
        </AnimatePresence>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
