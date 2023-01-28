import React from "react";
import { Routes, Link, BrowserRouter, Route } from "react-router-dom";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Home from "./Home";
import NoPage from "./NoPage";

function Layout() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
