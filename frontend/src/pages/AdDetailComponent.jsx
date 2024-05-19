import React from 'react';

const AdDetailComponent = ({ ad, vehicle, role, onBuyNow }) => {
    return (
        <>
            <h2>Ad Details</h2>
            <div className="card m-5">
                <div className="card-body">
                    <h5 className="card-title">Price: ${ad.price}</h5>
                    <p className="card-text">Ad Posted On: {new Date(ad.datecreated).toLocaleDateString()}</p>
                    {vehicle && (
                        <>
                            <h2>Vehicle Details</h2>
                            <p className="card-text">Company : {vehicle.company}</p>
                            <p className="card-text">Model : {vehicle.model}</p>
                            <p className="card-text">Varient : {vehicle.varient}</p>
                            <p className="card-text">Model Year : {vehicle.year}</p>
                            <p className="card-text">Color : {vehicle.color}</p>
                            <p className="card-text">Power : {vehicle.power}</p>
                            <p className="card-text">Bought Price : {vehicle.buyprice}</p>
                            <p className="card-text">Status : {vehicle.status}</p>
                            <p className="card-text">Mileage : {vehicle.mileage}</p>
                            <p className="card-text">Transmission : {vehicle.transmission}</p>
                            <p className="card-text">Test Drive : {vehicle.testdrive ? 'Available' : 'Not Available'}</p>
                        </>
                    )}
                    {role === 'dealer' || role === 'user' && (
                        <div className='d-flex flex-row justify-content-center'>
                            <button className="btn btn-success w-50" onClick={onBuyNow}>Buy Now</button>

                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AdDetailComponent;
