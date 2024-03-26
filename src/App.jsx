import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Work from "./Components/WORK/Work";
import About from "./Components/ABOUT/About";
import Skills from "./Components/SKILLS/Skills";
import Notes from "./Components/NOTES/Notes";
import Footer from "./Components/FOOTER/Footer";
import NotFound from "./Components/NOTFOUNDPAGE/NotFound";
import ThemeToggle from "./Components/BUTTONS/ThemeBtn";
import ReactProject from "./Components/ReactProject";
import CustomNavbar from "./Components/NAVBAR/CustomNavbar";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="app-container">
        <ThemeToggle />
        <CustomNavbar />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/play" element={<Skills />} />
            <Route path="/note" element={<Notes />} />
            <Route path="/react" element={<ReactProject />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}

export default App;
