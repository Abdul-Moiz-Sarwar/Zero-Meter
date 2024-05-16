import React from 'react';

const VehicleDetailComponent = ({ vehicle }) => {
    const { title, image, price, specifications } = vehicle;

    return (
        <div className="row">
            <div className="col-md-6">
                <img src={image} alt={title} className="img-fluid" />
            </div>
            <div className="col-md-6">
                <h2>{title}</h2>
                <p>Price: {price}</p>
                <ul>
                    {Object.entries(specifications).map(([key, value]) => (
                        <li key={key}><strong>{key}:</strong> {value}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default VehicleDetailComponent;
