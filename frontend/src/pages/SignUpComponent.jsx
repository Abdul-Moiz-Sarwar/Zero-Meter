import React, { useState,useRef,useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const containerStyle = {
    width: '80vw',
    height: '100vh'
};

const defaultCenter = {
    lat: -3.745,
    lng: -38.523
};


const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        type: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        cnic: '',
        dealershipname: '',
        registration: '',
        instagram:'',
        facebook:'',
        lat:'',
        lng:'',
    });

    const navigate = useNavigate()

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
                    setFormData({ ...formData, ['lat']: latitude, ['lng']: longitude });
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
        setCenter({ lat: event.latLng.lat(), lng: event.latLng.lng() });
        setFormData({ ...formData, ['lat']: event.latLng.lat(), ['lng']: event.latLng.lng() });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/accounts/signup', formData)
        .then( (res,err) => {console.log(res.data); navigate('/login')})
        .catch( (res,err) => {console.log(res.response.data);});
        console.log(formData);
    };

    return (
        <>
        <div className="container mt-5">
s            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Enter your username" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter your email" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} placeholder="Enter your city" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input type="text" className="form-control" id="country" name="country" value={formData.country} onChange={handleChange} placeholder="Enter your country" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cnic" className="form-label">Cnic</label>
                    <input type="text" className="form-control" id="cnic" name="cnic" value={formData.cnic} onChange={handleChange} placeholder="Enter your cnic" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Type</label>
                    <select className="form-select" id="type" name="type" value={formData.type} onChange={handleChange} required>
                        <option value="user">User</option>
                        <option value="dealership">Dealership</option>
                    </select>
                </div>


                
                    {isLoaded &&formData.type=='dealership' ? (
                        <>
                            <div className="mb-3">
                                <label htmlFor="dealershipname" className="form-label">Dealership Name</label>
                                <input type="text" className="form-control" id="dealershipname" name="dealershipname" value={formData.dealershipname} onChange={handleChange} placeholder="Enter your dealership name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="registration" className="form-label">Dealership Registration Number</label>
                                <input type="text" className="form-control" id="registration" name="registration" value={formData.registration} onChange={handleChange} placeholder="Enter your registration number" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="instagram" className="form-label">Intagram Link</label>
                                <input type="text" className="form-control" id="instagram" name="instagram" value={formData.instagram} onChange={handleChange} placeholder="Enter your instagram link" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="facebook" className="form-label">Facebook Link</label>
                                <input type="text" className="form-control" id="facebook" name="facebook" value={formData.facebook} onChange={handleChange} placeholder="Enter your facebook link" />
                            </div>
                            <div className="mb-3">
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
                            </div>
                        </>
                    ) : (
                        <></> // Empty fragment if map is not loaded
                    )}
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>





</>
    );
}

export default SignupForm;
