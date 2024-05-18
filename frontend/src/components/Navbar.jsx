import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//  <img src="C:\Users\techzone\Documents\1.6th semester\Web Prog\vehiclerental\src\assests\ZeroMeterlogo.png" className="logo" alt="Logo" />
const Navbar = () => {


    const handleLogout = async () => {
        try {
            const res = await axios.post('http://localhost:3000/accounts/logout',{}, { withCredentials: true });
            console.log("logged out")
          } catch (error) {
            console.error('Error logging out', error);
          }
    }


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
                            <Link className="nav-link" to="/signup">Sign Up</Link> 
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="/login">Log In</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dealerprofile">Dealer Profile</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/invoices">Invoices</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ads">Ads</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/payment">Payment</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/userprofile">User Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dealers">View Dealers</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/analytics">Analytics</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/userlist">View Users</Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/checkout">Checkout</Link> 
                        </li>
                        <li>
                            <button onClick={handleLogout} >Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;