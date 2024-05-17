import React, { useState } from 'react';
import VehicleListComponent from './VehicleListComponent';
import { Link } from 'react-router-dom';
import image1 from './images/civic.jpg';
import image2 from './images/Tuscon.jpg';
import image3 from './images/fordcar.jpg';

const VehiclesPage = ({ role }) => {
    const initialVehicles = [
        {
            id: 1,
            title: 'Toyota Civic',
            image: image1,
            price: '$10,000',
            testDrive: 'Yes',
            status: 'Unsold',
            dateSold: null,
            soldTo: null,
            addedBy: 'Admin',
            dateCreated: '2024-05-15',
            automobileID: 'A1234',
            specifications: {
                type: 'Car',
                company: 'Toyota',
                model: 'Corolla',
                variant: 'GLi',
                modelYear: '2022',
                engineSize: '1.6L',
                horsePower: '120hp',
                color: 'Black',
                mileage: '25,000 km',
                transmission: 'Automatic',
                topSpeed: '180 km/h',
                rating: '4.5/5'
            }
        },
        {
            id: 2,
            title: 'Tuscan 2024',
            image: image2,
            price: '$30,000',
            testDrive: 'Yes',
            status: 'Unsold',
            dateSold: null,
            soldTo: null,
            addedBy: 'Admin',
            dateCreated: '2024-05-15',
            automobileID: 'A1234',
            specifications: {
                type: 'Car',
                company: 'Toyota',
                model: 'Corolla',
                variant: 'GLi',
                modelYear: '2022',
                engineSize: '1.6L',
                horsePower: '120hp',
                color: 'Black',
                mileage: '25,000 km',
                transmission: 'Automatic',
                topSpeed: '180 km/h',
                rating: '4.5/5'
            }
        },
        {
            id: 3,
            title: 'Ford Ranger',
            image: image3,
            price: '$30,000',
            testDrive: 'Yes',
            status: 'Unsold',
            dateSold: null,
            soldTo: null,
            addedBy: 'Admin',
            dateCreated: '2024-05-15',
            automobileID: 'A1234',
            specifications: {
                type: 'Car',
                company: 'Toyota',
                model: 'Corolla',
                variant: 'GLi',
                modelYear: '2022',
                engineSize: '1.6L',
                horsePower: '120hp',
                color: 'Black',
                mileage: '25,000 km',
                transmission: 'Automatic',
                topSpeed: '180 km/h',
                rating: '4.5/5'
            }
        },
        // Add more vehicles as needed
    ];

    const [vehicles, setVehicles] = useState(initialVehicles);

    const handleDeleteVehicle = (id) => {
        if (window.confirm('Are you sure you want to delete this vehicle?')) {
            const updatedVehicles = vehicles.filter(vehicle => vehicle.id !== id);
            setVehicles(updatedVehicles);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">View Vehicles</h1>
            {role !== 'admin' && (
                <div className="mb-3">
                    <Link to="/vehicles/add" className="btn btn-primary mb-3">Add Vehicle</Link>
                </div>
            )}
            <VehicleListComponent vehicles={vehicles} role={role} onDelete={handleDeleteVehicle} />
        </div>
    );
};

export default VehiclesPage;
