import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VehicleListComponent from '../pages/VehicleListComponent'; // Import your VehicleListComponent
import VehicleFormComponent from '../pages/VehicleFormComponent'; // Import your VehicleFormComponent

const DealerVehicleListPage = ({ vehicles, onDelete }) => {
    const navigate = useNavigate();
    const [vehicleList, setVehicles] = useState(vehicles); // Define setVehicles using useState

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this vehicle?");
        if (confirmDelete) {
            const updatedVehicles = vehicleList.filter(vehicle => vehicle.id !== id);
            setVehicles(updatedVehicles); // Update the state using setVehicles
            alert("Successfully deleted!");
        }
    };

    const handleEdit = (id) => {
        navigate(`/vehicles/edit/${id}`);
    };

    return (
        <div>
            <h1>Dealer Vehicle List</h1>
            <Link to="/vehicles/add" className="btn btn-primary mb-3">Add Vehicle</Link>
            <VehicleListComponent vehicles={vehicleList} onDelete={handleDelete} onEdit={handleEdit} isAdmin={false} />
        </div>
    );
}

export default DealerVehicleListPage;
