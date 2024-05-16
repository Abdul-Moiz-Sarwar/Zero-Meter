import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AdminAdListComponent from './AdminAdListComponent.jsx';
import ad1 from './images/ad1.jpg'
import ad2 from './images/ad2.jpg'
import ad3 from './images/ad3.jpg'

const AdminAdListPage = () => {
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

  // Function to delete an ad
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this ad?");
    if (confirmDelete) {
      setAds(prevAds => prevAds.filter(ad => ad.id !== id));
    }
  };

  return (
    <div>
      <AdminAdListComponent ads={ads} onDelete={handleDelete} />
    </div>
  );
}

export default AdminAdListPage;