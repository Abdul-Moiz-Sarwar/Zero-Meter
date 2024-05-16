import SignUpForm from './SignUpComponent'; // Import your SignUpForm component
import React, { useRef, useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const defaultCenter = {
    lat: -3.745,
    lng: -38.523
};

const SignUpPage = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCiet4SByi8rNwFqyBa5_HJv13hqMzNz9c",
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

    

    const handleMapClick = (event) => {
        setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    };

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h1 className="text-center">Welcome to the Sign Up Page</h1>
                        <p className="text-center">Please fill out the form below to create an account.</p>
                        <SignUpForm />
                    </div>
                </div>
            </div>
    
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={9.85}
                    onLoad={onLoad}
                    options={{ mapTypeControl: false }}
                    onClick={handleMapClick}
                >
                    {markerPosition && <Marker position={markerPosition} />}
                    {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
                </GoogleMap>
            ) : (
                <></> // Empty fragment if map is not loaded
            )}
    
            <div style={{ position: 'relative', top: 20, left: 20, zIndex: 100 }}>
                <button>Select Location</button>
            </div>
        </>
    );
    
}

export default SignUpPage;
