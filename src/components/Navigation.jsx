import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/" className="nav-link" activeclassname="active">
        Home
      </NavLink>
      <NavLink to="/movies" className="nav-link" activeclassname="active">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
