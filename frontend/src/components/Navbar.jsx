import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//  <img src="C:\Users\techzone\Documents\1.6th semester\Web Prog\vehiclerental\src\assests\ZeroMeterlogo.png" className="logo" alt="Logo" />
const Navbar = ({role}) => {


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
            <div className="w-100 px-5" bis_skin_checked="1">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    
                    <Link className="navbar-brand" to="/">Zero Meter</Link>

                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><Link className="nav-link px-2" to="/">Home</Link></li>
                            <li><Link className="nav-link" to="/blogs">Blogs</Link></li>
                            <li><Link className="nav-link" to="/about">About</Link></li>
                            <li><Link className="nav-link" to="/contact">Contact</Link></li>
                        </ul>

                    <div className="col-md-3 text-end" bis_skin_checked="1">
                        {role ==='none' && (
                            <>
                                <Link className="btn btn-outline-primary me-2" to="/login">Log In</Link> 
                                <Link className="btn btn-primary" to="/signup">Sign Up</Link>
                            </>
                        )}
                        {role !=='none' && (
                            <>
                                <button className="btn btn-secondary" onClick={handleLogout} >Logout</button>
                            </>
                        )}
                    </div>
                </header>
        </div>
        </div>
    );
}

export default Navbar;