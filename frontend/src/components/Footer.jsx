import React from 'react';

const Footer = () => {
    return (
        <div className="footer mt-auto py-3 bg-dark text-white">
            <div className="container-fluid text-end"> {/* Use container-fluid for full width */}
                <p className="text-end">&copy; 2024 Vehicle Dealership. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
