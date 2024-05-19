// AdListPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdListComponent from './AdListComponent';
import { Link } from 'react-router-dom';

const AdListPage = ({ role }) => {
  const [ads, setAds] = useState([]);  

  useEffect(() => {
    const fetchAdsAndVehicles = async () => {
      try {
        const adsRes = await axios.get('http://localhost:3000/ads/', { withCredentials: true });
        const adsData = adsRes.data;
        const adsWithVehicles = await Promise.all(
          adsData.map(async (ad) => {
            try {
              const vehicleRes = await axios.get(`http://localhost:3000/vehicles/${ad.vehicle}`, { withCredentials: true });
              return { ...ad, vehicle: vehicleRes.data };
            } catch (error) {
              console.error(`Error fetching vehicle data for ad ${ad.id}:`, error);
            }
          })
        );

        setAds(adsWithVehicles);
      } catch (error) {
        console.error('Error fetching ads data:', error);
      }
    };

    fetchAdsAndVehicles();
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
    <div className="p-5 bg-light">
      <h1>Advertisments</h1>
      <AdListComponent ads={ads} role={role} onDelete={handleDeleteAd} />
    </div>
  );
};

export default AdListPage;
