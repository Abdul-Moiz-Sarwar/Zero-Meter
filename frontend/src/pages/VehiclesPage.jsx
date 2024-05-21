import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VehicleListComponent from './VehicleListComponent';
import { Link } from 'react-router-dom';

const VehiclesPage = ({ role }) => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const res = await axios.get('http://localhost:3000/vehicles/', { withCredentials: true });
                setVehicles(res.data);
            } catch (error) {
                console.error('Error fetching vehicles data:', error);
            }
        };
        fetchVehicles();
    }, []);

    const handleDeleteVehicle = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/vehicles/${id}`, { withCredentials: true });
            setVehicles(prevVehicles => prevVehicles.filter(vehicle => vehicle._id !== id));
        } catch (error) {
            console.error('Error deleting vehicle data:', error);
        }
    };

    const handleCreateAd = async (vehicleId) => {
        try {
            await axios.post('http://localhost:3000/ads/', { vehicleId }, { withCredentials: true });
        } catch (error) {
            console.error('Error creating ad from vehicle:', error);
        }
    };

    return (
        <div className="p-5 bg-light">
            <div className='d-flex flex-row justify-content-between'>
            <h1>View Vehicles</h1>
            {role === 'dealer' && (
                <Link to="/vehicles/add" className="btn btn-primary mb-3">Add Vehicle</Link>
            )}
            </div>
            <VehicleListComponent vehicles={vehicles} role={role} onDelete={handleDeleteVehicle} onCreateAd={handleCreateAd} />
        </div>
    );
};

export default VehiclesPage;
