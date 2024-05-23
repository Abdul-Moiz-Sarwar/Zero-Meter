import React from 'react';
import { Link } from 'react-router-dom';

const AdListComponent = ({ ads, role, onDelete }) => {
  return (
    <div className="p-5 gap-2 row row-cols-1 row-cols-md-3 g-4">
      {ads.map((ad) => (
        <div key={ad._id} className="card shadow" style={{ width: '18rem' }}>
          <img src={ad.imageUrl} className="card-img-top" alt={ad.title} />
          <div className="card-body">
            <h5 className="card-title">{ad.vehicle.company} {ad.vehicle.model}</h5>
            <p className="card-text">Price: ${ad.price}</p>
            <p className="card-text">Posted On: {new Date(ad.datecreated).toLocaleDateString()}</p>
            <Link to={`/ads/${ad._id}`} className="btn btn-primary w-100 my-1">View Details</Link>
            {(role === 'admin' || role === 'dealer') && (
              <div className='d-flex flex-row gap-1'>
                <button className="btn btn-danger w-100" onClick={() => onDelete(ad._id)}>Delete</button>
              </div>
            )}
              {(role === 'dealer') && (
              <div className='d-flex flex-row gap-1'>
              <Link to={`/vehicles/edit/${ad.vehicle._id}`} className="btn btn-secondary w-100">Edit</Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdListComponent;
