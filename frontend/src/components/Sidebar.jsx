import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleSidebar = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                <span>{isOpen ? '<' : '>'}</span> 
            </button>
            <ul className="sidebar-nav">
                <li>
                    <a href="#">View Ads</a>
                </li>
                <li>
                    <a href="#">Search Cars</a>
                </li>
                <li>
                    <a href="#">Buy Cars</a>
                </li>
                <li>
                    <a href="#">Payments</a>
                </li>
                <li>
                    <a href="#">Rate Dealership/Car</a>
                </li>
                <li>
                    <a href="#">Nearby Dealers</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
