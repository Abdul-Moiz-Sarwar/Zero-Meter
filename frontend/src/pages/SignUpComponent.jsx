import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '80vh'
};

const defaultCenter = {
  lat: -3.745,
  lng: -38.523
};

const SignUpForm = ({ setRole }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    type: 'user',
    phone: '',
    address: '',
    city: '',
    country: '',
    cnic: '',
    dealershipname: '',
    registration: '',
    instagram: '',
    facebook: '',
    lat: '',
    lng: '',
  });

  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCiet4SByi8rNwFqyBa5_HJv13hqMzNz9c",
    libraries: ['places']
  });

  const [center, setCenter] = useState(defaultCenter);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null); 

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
      .then((res, err) => {
        console.log(res.data);
        setRole(res.data.user.type); 
        navigate('/login');
      })
      .catch((res, err) => {
        console.log(res.response.data);
      });
    console.log(formData);
  };

  return (
    <form className="form w-100 m-auto p-5 bg-light" onSubmit={handleSubmit}>
  <div className="form-floating m-1">
            <input type="text" className="form-control" id="username" placeholder="username" name="username" value={formData.username} onChange={handleChange} required />
            <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating m-1">
            <input type="email" className="form-control" id="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} aria-describedby="emailHelp" required />
            <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating m-1">
            <input type="password" className="form-control" id="password" placeholder="password" name="password" value={formData.password} onChange={handleChange} required />
            <label htmlFor="password">Password</label>
        </div>
        <div className="form-floating m-1">
            <input type="text" className="form-control" id="phone" placeholder="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            <label htmlFor="phone">Phone</label>
        </div>
        <div className="form-floating m-1">
            <input type="text" className="form-control" id="address" placeholder="address" name="address" value={formData.address} onChange={handleChange} required />
            <label htmlFor="address">Address</label>
        </div>
        <div className="form-floating m-1">
            <input type="text" className="form-control" id="city" placeholder="city" name="city" value={formData.city} onChange={handleChange} required />
            <label htmlFor="city">City</label>
        </div>
        <div className="form-floating m-1">
            <input type="text" className="form-control" id="country" placeholder="country" name="country" value={formData.country} onChange={handleChange} required />
            <label htmlFor="country">Country</label>
        </div>
        <div className="form-floating m-1">
            <input type="text" className="form-control" id="cnic" placeholder="cnic" name="cnic" value={formData.cnic} onChange={handleChange} required />
            <label htmlFor="cnic">CNIC</label>
        </div>
        <div className="form-floating m-1">
            <select className="form-select" id="type" name="type" placeholder="type" value={formData.type} onChange={handleChange} required>
                <option value="user">User</option>
                <option value="dealership">Dealership</option>
            </select>
            <label htmlFor="type">Type</label>
        </div>


        
            {isLoaded &&formData.type=='dealership' ? (
                <>
                    <div className="form-floating m-1">
                        <input type="text" className="form-control" id="dealershipname" placeholder="dealershipname" name="dealershipname" value={formData.dealershipname} onChange={handleChange} required />
                        <label htmlFor="dealershipname">Dealership Name</label>
                    </div>
                    <div className="form-floating m-1">
                        <input type="text" className="form-control" id="registration" placeholder="registration" name="registration" value={formData.registration} onChange={handleChange} required />
                        <label htmlFor="registration">Registration</label>
                    </div>
                    <div className="form-floating m-1">
                        <input type="text" className="form-control" id="instagram" placeholder="instagram" name="instagram" value={formData.instagram} onChange={handleChange} />
                        <label htmlFor="instagram">Instagram</label>
                    </div>
                    <div className="form-floating m-1">
                        <input type="text" className="form-control" id="facebook" placeholder="facebook" name="facebook" value={formData.facebook} onChange={handleChange} />
                        <label htmlFor="facebook">Facebook</label>
                    </div>
                    <div className="form-floating m-1 d-flex justify-content-center">
                        <GoogleMap id='location'
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
                <></> 
            )}
        <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-100 py-2" >Sign Up</button>
            </div>
    </form>
  );
}

export default SignUpForm;
