import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy } from "react";

const ReactProject = lazy(() => import("./Components/ReactProject.jsx"));
const WorkComponent = lazy(() => import("./Components/WORK/Work.jsx"));
const AboutComponent = lazy(() => import("./Components/ABOUT/About.jsx"));
const SkillsComponent = lazy(() => import("./Components/SKILLS/Skills.jsx"));
const NotesComponent = lazy(() => import("./Components/NOTES/Notes.jsx"));
const FooterComponent = lazy(() => import("./Components/FOOTER/Footer.jsx"));
const NotFoundComponent = lazy(() =>
  import("./Components/NOTFOUNDPAGE/NotFound.jsx")
);
const ThemeToggleComponent = lazy(() =>
  import("./Components/BUTTONS/ThemeBtn.jsx")
);

import CustomNavbar from "./Components/NAVBAR/CustomNavbar.jsx";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="app-container">
        <ThemeToggleComponent />
        <CustomNavbar />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route index element={<WorkComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/play" element={<SkillsComponent />} />
            <Route path="/note" element={<NotesComponent />} />
            {/* inner pages */}
            <Route path="/react" element={<ReactProject />} />
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
