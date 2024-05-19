import React from 'react';
import { Link } from 'react-router-dom';

const VehicleListComponent = ({ vehicles, role, onDelete, onCreateAd }) => {
    return (
        <div className="p-5 gap-2 row row-cols-1 row-cols-md-3 g-4">
            {vehicles.map((vehicle) => (
                <div key={vehicle._id} className="card shadow" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{vehicle.company} {vehicle.model} {vehicle.varient}</h5>
                        <p className="card-text">{vehicle.year}</p>
                        <hr/>
       
                        {role === 'dealer' && (
                            <>
                                <div className='d-flex flex-row'>
                                    <Link to={`/vehicles/${vehicle._id}`} className="btn btn-primary w-100 m-1">Details</Link>
                                    <button className="btn btn-danger w-100 m-1" onClick={() => onDelete(vehicle._id)}>Delete</button>
                                </div>
                                <div className='d-flex flex-row'>
                                    <Link to={`/vehicles/edit/${vehicle._id}`} className="btn btn-secondary w-100 m-1">Edit</Link>
                                    <button className="btn btn-success w-100 m-1" onClick={() => onCreateAd(vehicle._id)}>Advertise</button>
                                </div>
                            </>
                        )}

                        {role !== 'dealer' && (
                            <>
                                <div className='d-flex flex-row'>
                                    <Link to={`/vehicles/${vehicle._id}`} className="btn btn-primary w-100 m-1">Details</Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VehicleListComponent;
