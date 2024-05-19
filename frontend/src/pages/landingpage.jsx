import React from 'react';
import caricon from './images/fleet-management.png'
import schedule from './images/schedule.png'
import pricetag from './images/tag.png'
import support from './images/customer-service.png'
import map from './images/map.png'
import carstore from './images/carstore.jpg'
import './landingpage.css'
import logo from '../assets/project logo.png'

const LandingPage = () => {
    return (
        <div className="m-5 d-flex flex-column">
            


                

                <h1 className="welcome-text">Welcome to Zero Meter!</h1>
                <p className='text-center'>Jidher aap udher dealer!</p>
                
                {/* Add the image */}
                <img src={carstore} className='rounded-5 shadow' style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', marginBottom: '20px' }} />


                <div className="px-4 py-5 my-5 text-center" bis_skin_checked="1">
                    <img className="img img-fluid d-block mx-auto mb-4 p-3" src={logo} style={{ width: '300px'}}/>
                    <h1 className="display-5 fw-bold text-body-emphasis">Login or Create an Account</h1>
                    <div className="col-lg-6 mx-auto" bis_skin_checked="1">
                    <p className="lead mb-4">Join the huge car community of Zero Meter to buy, sell, admire and stay up to date with vehicle trends and sales. Manage your inventory as a dealer like never before with the integrated dashboard for your dealership</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center" bis_skin_checked="1">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3 w-25">Login</button>
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3 w-25">Signup</button>
                    </div>
                    </div>
                </div>

                {/* Why choose us section */}
                <div className="container px-4 py-5" id="icon-grid" bis_skin_checked="1">
                    <h2 className="pb-2 border-bottom">Why Zero Meter</h2>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5" bis_skin_checked="1">
                    
                    <div className="col d-flex align-items-start" bis_skin_checked="1">
                        <div bis_skin_checked="1">
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start" bis_skin_checked="1">
                        <div bis_skin_checked="1">
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start" bis_skin_checked="1">
                        <div bis_skin_checked="1">
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start" bis_skin_checked="1">
                        <div bis_skin_checked="1">
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start" bis_skin_checked="1">
                        <div bis_skin_checked="1">
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start" bis_skin_checked="1">
                        <div bis_skin_checked="1">
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    </div>
                </div>
                
                <p>Ready to get started? Explore our range of vehicles and book your ride online today!</p>
            </div>
    );
}

export default LandingPage;
