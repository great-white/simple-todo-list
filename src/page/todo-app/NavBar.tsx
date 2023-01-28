import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <NavLink to={"/existing"}>Existing</NavLink>
      <NavLink to={"/new"}>New</NavLink>
      <NavLink to={"/bin"}>Deleted</NavLink>
    </nav>
  );
}
