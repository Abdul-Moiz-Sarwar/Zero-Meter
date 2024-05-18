import React from 'react';

const VehicleDetailComponent = ({ vehicle }) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <img src={vehicle.image} alt={vehicle.company} className="img-fluid" />
            </div>
            <div className="col-md-6">
                <h2>{vehicle.model}</h2>
                <p>Price: {vehicle.sellprice}</p>
            </div>
        </div>
    );
}

export default VehicleDetailComponent;
