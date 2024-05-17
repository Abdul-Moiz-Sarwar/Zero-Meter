import React from 'react';
import { Link } from 'react-router-dom';
//  <img src="C:\Users\techzone\Documents\1.6th semester\Web Prog\vehiclerental\src\assests\ZeroMeterlogo.png" className="logo" alt="Logo" />
const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">                  
                    Zero Meter
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/vehicles">Vehicles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Sign Up</Link> {/* Update link to redirect to Contact Us page */}
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="/login">Log In</Link> {/* Update link to redirect to Contact Us page */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dealerprofile">Dealer Profile</Link> {/* Update link to redirect to Contact Us page */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/invoices">Invoices</Link> {/* Update link to redirect to Contact Us page */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dealer-analytics">Analytics</Link> {/* Update link to redirect to Contact Us page */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ads">Ads</Link> {/* Update link to redirect to Contact Us page */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/userads">User Ads</Link> {/* Update link to redirect to Contact Us page */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/payment">Payment</Link> {/* Update link to redirect to Contact Us page */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/userprofile">User Profile</Link> {/* Update link to redirect to Contact Us page */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dealers">View Dealers</Link> {/* Update link to redirect to Contact Us page */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/ads">Admin Ads</Link> {/* Update link to redirect to Contact Us page */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/analytics">Admin Analytics</Link> {/* Update link to redirect to Contact Us page */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;