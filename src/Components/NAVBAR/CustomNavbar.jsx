import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.css";
import { tabs } from "../../Data/Data";

const CustomNavbar = () => {
  const [background, setBackground] = useState(false);

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

  return (
    <div className="container fixed top-0 left-0 right-0 mx-auto z-10 mt-5">
      <nav className="navbar">
        <ul
          className={`navbar-list flex justify-center rounded-full max-w-fit mx-auto ${
            background ? "Blur shadow-sm" : ""
          }`}
        >
          {tabs.map((item, index) => {
            return <NavbarItem to={item.to} title={item.title} key={index} />;
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

export default CustomNavbar;
