import React, { useRef, useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const defaultCenter = {
  lat: -3.745,
  lng: -38.523
};

function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "Google Maps API KEY",
    libraries: ['places']
  });

  const [center, setCenter] = useState(defaultCenter);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null); // Define directionsResponse state

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error fetching location:', error);
          alert('Error fetching location');
        }
      );
    } else {
      alert('Geolocation not supported by this browser');
    }
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, [center]);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMapClick = (event) => {
    setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
  };

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ mapTypeControl: false }}
        onClick={handleMapClick}
      >
        {markerPosition && <Marker position={markerPosition} />}
        {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
      </GoogleMap>
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 100 }}>
        <button>Select Location</button>
      </div>
    </>
  ) : <></>;
}

export default App;