import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutUs.css'; 
import image1 from './images/ford.jpg';
import image2 from './images/toyota.png';
import image3 from './images/crowley.jpg';
import image4 from './images/autonation.jpg';
import dealershipImage from './images/dealership.jpg'; 

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-5 d-flex flex-column">

      <h1 className="text-center">About Us</h1>
      <p className="text-center">We Have All Your Favorite Car Dealers Registered With Us!</p>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="Ford" className="slider-image" />
          </div>
          <div>
            <img src={image2} alt="Toyota" className="slider-image" />
          </div>
          <div>
            <img src={image3} alt="Crowley" className="slider-image" />
          </div>
          <div>
            <img src={image4} alt="Autonation" className="slider-image" />
          </div>
        </Slider>
      </div>

      <div className="d-flex flex-row p-5 m-5">
        <p className="about-us-text">
        For over two decades, Zero Meter has been a cornerstone in the automotive industry, committed to delivering unparalleled services and fostering lasting relationships with our valued customers. With a rich legacy spanning twenty years, we have set the benchmark for excellence in the market. Our team of seasoned professionals brings a wealth of expertise and passion to every interaction, ensuring that each customer receives personalized attention and expert guidance throughout their journey with us. At Zero Meter, our commitment to excellence remains unwavering as we continue to evolve, innovate, and serve our community with pride.        
        </p>
        <img src={dealershipImage} alt="Dealership" className="img img-fluid w-50" />
      </div>

      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Why Zero Meter</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">High Quality Services</h3>
              <p>Experience top-notch services that ensure a seamless vehicle trading process.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">24/7 Support</h3>
              <p>Get assistance round the clock with our dedicated customer support team.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Expert Guidance</h3>
              <p>Receive expert advice and guidance from our seasoned professionals.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Wide Selection</h3>
              <p>Choose from a wide selection of vehicles from renowned dealerships.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">User-Friendly Interface</h3>
              <p>Enjoy a seamless browsing experience with our intuitive interface.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Secure Transactions</h3>
              <p>Rest assured with secure and reliable transaction processes.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row gap-5 p-5 justify-content-center">
        <div className="d-flex flex-column align-items-center mx-5">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
          <h2 className="text-center">Abdul Moiz</h2>
          <p className='text-center'>Lead Backend</p>
        </div>

        <div className="d-flex flex-column align-items-center mx-5">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
          <h2 className="text-center">Laiba Mirza</h2>
          <p className='text-center'>Lead Frontend</p>
        </div>

        <div className="d-flex flex-column align-items-center mx-5">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
          <h2 className="text-center">Numair Imtiaz</h2>
          <p className='text-center'>Lead Integration</p>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;
