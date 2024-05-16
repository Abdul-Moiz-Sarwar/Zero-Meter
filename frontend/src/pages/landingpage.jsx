import React from 'react';
import caricon from './images/fleet-management.png'
import schedule from './images/schedule.png'
import pricetag from './images/tag.png'
import support from './images/customer-service.png'
import map from './images/map.png'
import carstore from './images/carstore.jpg'
import './landingpage.css'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <h1 className="welcome-text">Welcome to Zero Meter!</h1>
                <p>Jidher aap udher dealer!</p>
                
                {/* Add the image */}
                <img src={carstore} alt="Your Image" style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', marginBottom: '20px' }} />
                
                {/* Why choose us section */}
                <div className="why-choose-us">
                    <h2 className="why-choose-us-title">Why choose us?</h2>
                    <ul className="why-choose-us-list">
                        <li><img src={caricon} alt="Icon" className="why-choose-us-icon" /> Large fleet of well-maintained vehicles</li>
                        <li><img src={schedule} alt="Icon" className="why-choose-us-icon" /> Flexible rental options, including daily, weekly, and monthly rentals</li>
                        <li><img src={pricetag} alt="Icon" className="why-choose-us-icon" /> Competitive pricing and special discounts</li>
                        <li><img src={map} alt="Icon" className="why-choose-us-icon" /> Convenient pickup and drop-off locations</li>
                        <li><img src={support} alt="Icon" className="why-choose-us-icon" /> 24/7 customer support for assistance</li>
                    </ul>
                </div>
                
                <p>Ready to get started? Explore our range of vehicles and book your rental online today!</p>
                <button className="btn btn-primary">Browse Vehicles</button>
            </div>
        </div>
    );
}

export default LandingPage;
