import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdListComponent from './AdListComponent';

const AdListPage = ({ role }) => {
  const [ads, setAds] = useState([]);
  const [dealer, setDealer] = useState({});

  // Fetch dealer information
  useEffect(() => {
    const fetchDealer = async () => {
      try {
        const res = await axios.get('http://localhost:3000/accounts/getUser', { withCredentials: true });
        setDealer(res.data.user);
        console.log('Dealer fetched:', res.data.user);  // Log fetched dealer data
      } catch (error) {
        console.error('Error fetching dealer data:', error);
      }
    };

    fetchDealer();
  }, []);

  // Log the dealer state when it changes
  useEffect(() => {
    console.log('Dealer state updated:', dealer);  // Log when dealer state updates
  }, [dealer]);

  // Fetch ads and their vehicles once the dealer state is set
  useEffect(() => {
    const fetchAdsAndVehicles = async () => {
      try {
        const adsRes = await axios.get('http://localhost:3000/ads/', { withCredentials: true });
        const adsData = adsRes.data;
        console.log('Ads data fetched:', adsData);  // Log fetched ads data

        const adsWithVehicles = await Promise.all(
          adsData.map(async (ad) => {
            try {
              const vehicleRes = await axios.get(`http://localhost:3000/vehicles/${ad.vehicle}`, { withCredentials: true });
              const vehicle = vehicleRes.data;
              console.log(`Vehicle data fetched for ad ${ad._id}:`, vehicle.dealership);

              // Include ad if dealership is null or dealership matches dealer's dealership
              if (dealer.dealership === null || String(vehicle.dealership) === String(dealer._id)) {
                return { ...ad, vehicle };
              }
              return null;
            } catch (error) {
              console.error(`Error fetching vehicle data for ad ${ad._id}:`, error);
              return null;
            }
          })
        );

        const filteredAds = adsWithVehicles.filter(ad => ad !== null);
        console.log('Filtered ads:', filteredAds);  // Log filtered ads with vehicles
        setAds(filteredAds);
      } catch (error) {
        console.error('Error fetching ads data:', error);
      }
    };

    fetchAdsAndVehicles();
  }, [dealer]);

  // Handle delete ad
  const handleDeleteAd = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/ads/${id}`, { withCredentials: true });
      setAds(prevAds => prevAds.filter(ad => ad._id !== id));
    } catch (error) {
      console.error('Error deleting ad:', error);
    }
  };

  return (
    <div className="p-5 bg-light">
      <h1>Advertisements</h1>
      <AdListComponent ads={ads} role={role} onDelete={handleDeleteAd} />
    </div>
  );
};

export default AdListPage;
