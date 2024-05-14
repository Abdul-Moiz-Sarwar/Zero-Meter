import React from 'react'; // Add this import statement
import { Outlet, Link } from "react-router-dom";

function Nav() {
  return (
    <div className="px-5 bg-dark">
      <header className="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom">
        <a
          href="/"
          className="text-white d-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <img
            src="./src/assets/project ZeroMeterlogo.png"
            className="img img-fluid mx-2"
            width="30px"
          ></img>
          <span className="fs-4">- M E T E R</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="d-flex gap-4">
          <Link to="/dash" className="nav-link">
            <button type="button" className="btn btn-outline-primary">
              Login
            </button>
            <button type="button" className="btn btn-outline-primary">
              Sign-up
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Nav;