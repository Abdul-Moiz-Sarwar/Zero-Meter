import React from 'react';
import { Link } from 'react-router-dom';

const VehicleListComponent = ({ vehicles }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="col">
                    <div className="card h-100">
                        <img src={vehicle.image} className="card-img-top" alt={vehicle.title} />
                        <div className="card-body">
                            <h5 className="card-title">{vehicle.title}</h5>
                            <p className="card-text">Price: {vehicle.price}</p>
                            {/* Navigate to Vehicle Details page when "View Details" button is clicked */}
                            <Link to={`/vehicles/${vehicle.id}`} className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default VehicleListComponent;
