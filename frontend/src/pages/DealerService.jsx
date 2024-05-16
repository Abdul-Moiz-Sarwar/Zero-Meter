// DealerService.js
import React, { useState, useEffect } from 'react';
import dealer1 from './images/crowley.jpg';
import dealer2 from './images/toyota.png';

const DealerService = ({ children }) => {
  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    // Dummy data for dealers
    const dealers = [
      {
        id: 1,
        name: 'Crowley Motorss',
        email: 'dealer1@example.com',
        address: '123 Street, City, Country',
        image: dealer1,
      },
      {
        id: 2,
        name: 'Toyota',
        email: 'dealer2@example.com',
        address: '456 Street, City, Country',
        image: dealer2,
      },
      // Add more dummy dealers as needed
    ];

    setDealers(dealers);
  }, []);

  return React.Children.map(children, child =>
    React.cloneElement(child, { dealers })
  );
};

export default DealerService;
