// AdListPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdListComponent from './AdListComponent';
import { Link } from 'react-router-dom';

const AdListPage = ({ role }) => {
  const [ads, setAds] = useState([]);  

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await axios.get('http://localhost:3000/ads/', { withCredentials: true });
        setAds(res.data);
      } catch (error) {
        console.error('Error fetching ads data:', error);
      }
    };
    fetchAds();
  }, []);

  const handleDeleteAd = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/ads/${id}`, { withCredentials: true });
      setAds(prevAds => prevAds.filter(ad => ad._id !== id));
    } catch (error) {
      console.error('Error deleting ad:', error);
    }
  };

 /* const handleBuyNow = (ad) => {
    // Redirect to the checkout page with ad details
    window.location.href = `/checkout?adId=${ad._id}&price=${ad.price}&company=${ad.vehicle.company}&model=${ad.vehicle.model}&variant=${ad.vehicle.varient}&color=${ad.vehicle.color}`;
};*/

  return (
    <div className="container mt-5">
      <h1 className="mb-4">View Ads</h1>
      <AdListComponent ads={ads} role={role} onDelete={handleDeleteAd} />
    </div>
  );
};

export default AdListPage;
