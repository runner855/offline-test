import React from "react";
import "../NavBar/NavBar.css";
import { NavBarLinks } from "../../Utilities/Utility";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <ul className="navbar_container">
      {NavBarLinks.map((item) => {
        return <NavLink to={item.to}>{item.link}</NavLink>;
      })}
    </ul>
  );
};
