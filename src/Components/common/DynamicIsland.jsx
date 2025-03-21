import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const DynamicIsland = () => {
  const { pathname } = useLocation();

  const setPathName = () => {
    switch (pathname) {
      case "/":
        return "🏠 Home";
      case "/about":
        return "😎 About";
      case "/play":
        return "🥷🏻 Skills";
      case "/note":
        return "📒 Notes";
      case "/projects/react":
        return (
          <>
            <i className="fa-brands fa-react text-blue-500 me-2"></i> React
          </>
        );
      case "/projects/html":
        return (
          <>
            <i className="fa-brands fa-html5 text-green-500 me-2"></i> HTML CSS
            JS
          </>
        );
      case "/projects/figma":
        return (
          <>
            <i className="fa-brands fa-figma text-blue-500 me-2"></i> Figma
          </>
        );
      case "/projects/spring":
        return (
          <>
            <i className="fa-brands fa-java text-slate-100 me-2"></i> Spring
            Boot
          </>
        );
      default:
        return (
          <>
            <i className="fa-solid fa-skull-crossbones text-red-500 me-2"></i>{" "}
            Wrong turn
          </>
        );
    }
  };
  return (
    <div className="flex items-center justify-center cursor-none">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="overflow-hidden fixed bottom-10 z-50 bg-zinc-900 flex items-center justify-center rounded-full h-12 px-5 p-2 text-center"
      >
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="bodyText text-zinc-100 flex items-center justify-center"
        >
          {setPathName()}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default DynamicIsland;
