// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role, isVisible, toggleSidebar }) => {
  return (
    <div className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark ${isVisible ? '' : 'd-none'}`} style={{ width: "280px", height: "auto" }}>
      <ul className="nav nav-pills flex-column mb-auto">
        {role === 'admin' && (
          <>
            <li><Link to="/ads" className="nav-link text-white">Ads</Link></li>
            <li><Link to="/invoices" className="nav-link text-white">Invoices</Link></li>
            <li><Link to="/analytics" className="nav-link text-white">Analytics</Link></li>
            <li><Link to="/profile" className="nav-link text-white">Profile</Link></li>
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
            <li><Link to="/userlist" className="nav-link text-white">View Users</Link></li>
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
        {role === 'none' && (
          <>
            <li className='pt-5'><h6 className="py-0 nav-link text-white">Please Login</h6></li>
            <li><h6 className="py-0 nav-link text-white">or Signup</h6></li>
            <li><h6 className="py-0 nav-link text-white">to unlock</h6></li>
            <li><h6 className="py-0 nav-link text-white">more Options</h6></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
