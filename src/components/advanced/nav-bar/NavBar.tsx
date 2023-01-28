import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

type NavBarProps = {};

function NavBar(props: NavBarProps) {
  return (
    <nav>
      <NavLink to={"/existing"}>Existing ToDo Lists</NavLink>
      <NavLink to={"/new"}>New ToDo List</NavLink>
      <NavLink to={"/bin"}>Deleted ToDo Lists</NavLink>
    </nav>
  );
}

export default NavBar;
