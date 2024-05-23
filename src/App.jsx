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

function App() {
  const location = useLocation();
  return (
    <>
      <div className="app-container">
        {/* <ThemeToggleComponent /> */}
        <CustomNavbar />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route index element={<WorkComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/play" element={<SkillsComponent />} />
            <Route path="/note" element={<NotesComponent />} />
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
