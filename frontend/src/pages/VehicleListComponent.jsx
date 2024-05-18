import React from 'react';
import { Link } from 'react-router-dom';

const VehicleListComponent = ({ vehicles, role, onDelete, onCreateAd }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {vehicles.map((vehicle) => (
                <div key={vehicle._id} className="card" style={{ width: '18rem' }}>
                    <img src={vehicle.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{vehicle.company} {vehicle.model} {vehicle.varient}</h5>
                        <p className="card-text">{vehicle.year}</p>
                        <Link to={`/vehicles/${vehicle._id}`} className="btn btn-primary">View Details</Link>
                        {role === 'dealer' && (
                            <>
                                <button className="btn btn-danger me-2" onClick={() => onDelete(vehicle._id)}>Delete</button>
                                <Link to={`/vehicles/edit/${vehicle._id}`} className="btn btn-secondary me-2">Edit</Link>
                                <button className="btn btn-success" onClick={() => onCreateAd(vehicle._id)}>Create Ad</button>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VehicleListComponent;
