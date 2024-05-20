// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ role, isVisible, toggleSidebar }) => {
  return (
    <div className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark ${isVisible ? '' : 'd-none'}`} style={{ width: "280px", height: "100vh" }}>
      <button onClick={toggleSidebar} className="btn btn-dark text-white align-self-end">
        <FaTimes />
      </button>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4">Sidebar</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Home
          </Link>
        </li>
        {role === 'admin' && (
          <>
            <li><Link to="/blogs" className="nav-link text-white">Blogs</Link></li>
            <li><Link to="/about" className="nav-link text-white">About</Link></li>
            <li><Link to="/contact" className="nav-link text-white">Contact</Link></li>
            <li><Link to="/userlist" className="nav-link text-white">View Users</Link></li>
            <li><Link to="/vehicles" className="nav-link text-white">Vehicles</Link></li>
            <li><Link to="/userprofile" className="nav-link text-white">User Profile</Link></li>
            <li><Link to="/ads" className="nav-link text-white">Ads</Link></li>
            <li><Link to="/invoices" className="nav-link text-white">Invoices</Link></li>
            <li><Link to="/payment" className="nav-link text-white">Payment</Link></li>
            <li><Link to="/analytics" className="nav-link text-white">Analytics</Link></li>
            <li><Link to="/dealers" className="nav-link text-white">View Dealers</Link></li>
          </>
        )}
        {role === 'dealer' && (
          <>
            <li><Link to="/profile" className="nav-link text-white">Profile</Link></li>
            <li><Link to="/vehicles" className="nav-link text-white">Vehicles</Link></li>
            <li><Link to="/ads" className="nav-link text-white">Ads</Link></li>
            <li><Link to="/invoices" className="nav-link text-white">Invoices</Link></li>
            <li><Link to="/dealers" className="nav-link text-white">View Dealers</Link></li>
          </>
        )}
        {role === 'user' && (
          <>
            <li><Link to="/profile" className="nav-link text-white">Profile</Link></li>
            <li><Link to="/ads" className="nav-link text-white">Ads</Link></li>
            <li><Link to="/invoices" className="nav-link text-white">Invoices</Link></li>
            <li><Link to="/payment" className="nav-link text-white">Payment</Link></li>
            <li><Link to="/dealers" className="nav-link text-white">View Dealers</Link></li>
            <li><Link to="/checkout" className="nav-link text-white">Checkout</Link></li>
          </>
        )}
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
