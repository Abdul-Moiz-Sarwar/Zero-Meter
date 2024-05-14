import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Landing from "../pages/landingpage";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Dash from "./Dashboard/Dash";
import Error404 from "../errors/Error404";

function DashHome() {
  return (
    <>
      <Dash />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default DashHome;
