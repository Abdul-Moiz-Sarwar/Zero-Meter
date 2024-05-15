// AdListPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import UserAdListComponent from './UserAdListComponent.jsx';
import ad1 from './images/ad1.jpg'
import ad2 from './images/ad2.jpg'
import ad3 from './images/ad3.jpg'

const UserAdListPage = () => {
  // Dummy data for ads
  const [ads, setAds] = useState([
    {
      id: 1,
      title: 'Ad 1',
      description: 'Description of Ad 1',
      imageUrl: ad1,
      startDate: '2024-05-01',
      endDate: '2024-05-10'
    },
    {
      id: 2,
      title: 'Ad 2',
      description: 'Description of Ad 2',
      imageUrl: ad2,
      startDate: '2024-05-05',
      endDate: '2024-05-15'
    },
    {
      id: 3,
      title: 'Ad 3',
      description: 'Description of Ad 3',
      imageUrl: ad3,
      startDate: '2024-05-05',
      endDate: '2024-05-15'
    },
    // Add more ads as needed
  ]);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Advertisements Chosen For You!</h1>
      <UserAdListComponent ads={ads} />
    </div>
  );
}

export default UserAdListPage;
