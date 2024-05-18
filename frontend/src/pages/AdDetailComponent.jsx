import React from 'react';

const AdDetailComponent = ({ ad, vehicle, role, onDelete }) => {
    return (
        <div className='m-5'>
            <h2>Ad Details</h2>
            <div className="card m-5">
                <div className="card-body">
                    <h5 className="card-title">Price: ${ad.price}</h5>
                    <p className="card-text">Ad Created On: {new Date(ad.datecreated).toLocaleDateString()}</p>
                    {vehicle && (
                        <>
                            <h2>Vehicle Details</h2>
                            <img src={vehicle.imageUrl} className="card-img-top" alt={vehicle.model} />
                            <p className="card-text">Company: {vehicle.company}</p>
                            <p className="card-text">Model: {vehicle.model}</p>
                            <p className="card-text">Variant: {vehicle.varient}</p>
                            <p className="card-text">Year: {vehicle.year}</p>
                            <p className="card-text">Color: {vehicle.color}</p>
                            <p className="card-text">Power: {vehicle.power}</p>
                            <p className="card-text">Mileage: {vehicle.mileage}</p>
                            <p className="card-text">Transmission: {vehicle.transmission}</p>
                            <p className="card-text">Status: {vehicle.status}</p>
                            <p className="card-text">Bought Price: ${vehicle.buyprice}</p>
                            <p className="card-text">Sell Price: ${vehicle.sellprice}</p>
                            <p className="card-text">Date Created: {new Date(vehicle.datecreated).toLocaleDateString()}</p>
                        </>
                    )}
                    {role === 'dealer' && (
                        <>
                            <button className="btn btn-danger me-2" onClick={onDelete}>Delete</button>
                            <button className="btn btn-primary me-2" onClick={() => navigate(`/ads/edit/${ad._id}`)}>Edit</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdDetailComponent;
