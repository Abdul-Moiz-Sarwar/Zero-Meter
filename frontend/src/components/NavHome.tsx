import React from 'react'; // Add this import statement
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Landing from "../pages/landingpage";
import Blogs from "../pages/Blogs";
//import Blog from "../pages/Blog";
//import Contact from "../pages/Contact";
//import About from "../pages/About";
//import Dashboard from "../pages/Dashboard";
//import Dash from "./Dashboard/Dash";
//import Error404 from "../errors/Error404";
//<Route path="/blogs/:id" element={<Blog />} />
//<Route path="/contact" element={<Contact />} />
//<Route path="/about" element={<About />} />

function NavHome() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blogs" element={<Blogs />} /> 

      </Routes>
    </>
  );
}

export default NavHome;