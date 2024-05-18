import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VehicleListComponent from './VehicleListComponent';
import { Link } from 'react-router-dom';

const VehiclesPage = ({ role }) => {

    const [vehicles, setVehicles] = useState([]);

    useEffect(() =>{
        const fetchVehicles = async () => {
          try {
            const res = await axios.get('http://localhost:3000/vehicles/', { withCredentials: true });
            setVehicles(res.data);
          } catch (error) {
            console.error('Error fetching vehicles data:', error);
          }
        };
        fetchVehicles()
      },[]);

    const handleDeleteVehicle = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/vehicles/${id}`, { withCredentials: true });
            setVehicles(prevVehicles => prevVehicles.filter(vehicle => vehicle._id !== id));
          } catch (error) {
            console.error('Error deleting vehicles data:', error);
          }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">View Vehicles</h1>
            {role === 'dealer' && (
                <div className="mb-3">
                    <Link to="/vehicles/add" className="btn btn-primary mb-3">Add Vehicle</Link>
                </div>
            )}
            <VehicleListComponent vehicles={vehicles} role={role} onDelete={handleDeleteVehicle} />
        </div>
    );
};

export default VehiclesPage;
