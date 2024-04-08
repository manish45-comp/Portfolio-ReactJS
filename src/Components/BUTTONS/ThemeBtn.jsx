import { useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeBtn = () => {
  const [icon, setIcon] = useState("fa-sun text-amber-500");
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    let theme = localStorage.getItem("dark");
    if (theme === "enabled") {
      setDarkTheme(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      if (newTheme) {
        localStorage.setItem("dark", "enabled");
      } else {
        localStorage.setItem("dark", "disabled");
      }
      return newTheme;
    });
  };

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark-theme");
      setIcon("fa-sun text-amber-500");
    } else {
      document.body.classList.remove("dark-theme");
      setIcon("fa-moon");
    }
  }, [darkTheme]);

  return (
    <div id="toggle-container">
      <label id="theme-label" className="w-16 h-10">
        <input
          id="theme-input"
          className="m-2"
          type="checkbox"
          onChange={() => {
            setIcon(
              icon === "fa-sun text-amber-500"
                ? "fa-moon"
                : "fa-sun text-amber-500"
            );
            toggleTheme();
          }}
          checked={darkTheme}
        ></input>
        <span id="theme-switch" className="rounded-full">
          <i
            id="theme-circle"
            className="w-8 h-8 rounded-full flex justify-center items-center"
          >
            <i className={`fa-solid ${icon}`}></i>
          </i>
        </span>
      </label>
    </div>
  );
};

export default ThemeBtn;
