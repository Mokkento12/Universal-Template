import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <header className="header">
      <a href="/" className="logo">
        UniversalTemplate
      </a>
      <button onClick={toggleTheme} className="theme-button">
        Toggle Theme
      </button>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
