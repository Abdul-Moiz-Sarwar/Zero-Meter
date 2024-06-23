import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';
import axios from 'axios';

const defaultCenter = {
  lat: -3.745,
  lng: -38.523
};

const DealerDetailsPage = () => {
  const { id } = useParams();
  const [allDealers, setAllDealers] = useState([]);
  const [dealer, setDealer] = useState(null);
  const [center, setCenter] = useState(defaultCenter);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const uri = require("./../../../backend/secret")

  useEffect(() => {
    const fetchDealers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/Accounts/getAllDealers', { withCredentials: true });
        setAllDealers(res.data.dealers || []);
      } catch (error) {
        console.error('Error fetching dealers data:', error);
      }
    };
    fetchDealers();
  }, []);

  useEffect(() => {
    if (allDealers.length > 0) {
      const foundDealer = allDealers[id];
      if (foundDealer) {
        setDealer(foundDealer);
        console.log("Dealer found:", foundDealer);
      } else {
        console.log("Dealer not found with index:", id);
      }
    }
  }, [id, allDealers]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "Google Maps API KEY",
    libraries: ['places']
  });

  const calculateRoute = useCallback((origin, destination) => {
    if (window.google && window.google.maps) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
          } else {
            console.error('Directions request failed due to ' + status);
          }
        }
      );
    }
  }, []);

  useEffect(() => {
    if (dealer && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const currentPos = { lat: latitude, lng: longitude };
          const destinationPos = { lat: dealer.lat, lng: dealer.lng };

          setCenter(currentPos);
          setCurrentPosition(currentPos);

          calculateRoute(currentPos, destinationPos);
        },
        (error) => {
          console.error('Error fetching location:', error);
          alert('Error fetching location');
        }
      );
    }
  }, [dealer, calculateRoute]);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, [center]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!dealer) {
    return <div>Dealer not found</div>;
  }

  return (
    <div className='bg-light p-5 '>

    <div className='d-flex flex-row'>

      <div className='w-50'>
        <h1 className='pb-5'>Dealership Details</h1>
        <div className="dealer-details p-4">
            <h3>Name: {dealer.name}</h3>
            <h3>Registration: {dealer.registration}</h3>
        </div>
      </div>
      


      <div className='w-50'>
        <GoogleMap
          mapContainerStyle={{width: "100%",height: "100%"}}
          center={center}
          zoom={10}
          onLoad={onLoad}
          options={{ mapTypeControl: false }}
        >
          {currentPosition && <Marker position={currentPosition} />}
          {dealer.lat && dealer.lng && <Marker position={{ lat: dealer.lat, lng: dealer.lng }} />}
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>
      </div>
      </div>
    </div>
  );
};

export default DealerDetailsPage;
