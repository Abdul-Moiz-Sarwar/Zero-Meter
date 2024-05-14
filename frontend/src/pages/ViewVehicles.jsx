import React from 'react';
import VehicleListComponent from './VehicleListComponent';
import image1 from './images/civic.jpg';
import image2 from './images/Tuscon.jpg'
import image3 from './images/fordcar.jpg';

const ViewVehiclesPage = () => {
    
    const vehicles = [
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
    
    return (
        <div className="container mt-5">
            <h1 className="mb-4">View Vehicles</h1>
            <VehicleListComponent vehicles={vehicles} /> {/* Pass vehicles array as a prop */}
        </div>
    );
}

export default ViewVehiclesPage;
