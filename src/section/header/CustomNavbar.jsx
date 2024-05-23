import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.css";
import { tabs } from "../../Data/Data";

const CustomNavbar = () => {
  const [background, setBackground] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBackground(window.scrollY >= 100);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setBackground(window.scrollY >= 100);
      });
    };
  }, []);

  const handleNavButtonClick = (id, path) => {
    setActiveTab(id);
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="container fixed top-0 left-0 right-0 mx-auto z-10 mt-5">
      <nav className="navbar">
        <ul
          className={`navbar-list flex justify-center rounded-full max-w-fit mx-auto ${
            background ? "Blur shadow-sm" : ""
          }`}
        >
          {tabs.map((tab) => {
            return (
              <button
                key={tab.id}
                onClick={() => handleNavButtonClick(tab.id, tab.to)}
                className={`${
                  activeTab === tab.id ? "text-white" : "hover:opacity-50"
                }h-12 text-gray-950 relative rounded-full py-1.5 px-5 outline-2 outline-sky-200 transition focus-visible:outline`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{
                      ease: [0.33, 1, 0.68, 1],
                      duration: 0.6,
                    }}
                    className="absolute inset-0 bg-gray-50"
                    style={{ borderRadius: "99999px" }}
                  ></motion.div>
                )}
                <span className="z-10 relative">
                  <NavLink className="navText main-link relative" to={tab.to}>
                    {tab.title}
                  </NavLink>
                </span>
              </button>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export const NavbarItem = (props) => {
  const { title, to } = props;
  return (
    <li className="flex">
      <NavLink to={to} className="navText mx-1 main-link navbar-link relative">
        {title}
      </NavLink>
    </li>
  );
};

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default CustomNavbar;
