import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutUs.css'; 
import image1 from './images/ford.jpg';
import image2 from './images/toyota.png';
import image3 from './images/crowley.jpg';
import image4 from './images/autonation.jpg';
import dealershipImage from './images/dealership.jpg'; // Import your dealership image

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-subtitle">We Have All Your Favorite Car Dealers Registered With Us!</p>
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
      <div className="dealer-info">
        <p className="about-us-text">
        For over two decades, Zero Meter has been a cornerstone in the automotive industry, committed to delivering unparalleled services and fostering lasting relationships with our valued customers. With a rich legacy spanning twenty years, we have set the benchmark for excellence in the market. Our team of seasoned professionals brings a wealth of expertise and passion to every interaction, ensuring that each customer receives personalized attention and expert guidance throughout their journey with us. At Zero Meter, our commitment to excellence remains unwavering as we continue to evolve, innovate, and serve our community with pride.        
        </p>
        <img src={dealershipImage} alt="Dealership" className="dealer-image" />
      </div>
    </div>
  );
};

export default AboutUs;
