import React from 'react';
import { Link } from 'react-router-dom';

const AdListComponent = ({ ads, role, onDelete }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {ads.map((ad) => (
                <div key={ad._id} className="card" style={{ width: '18rem' }}>
                    <img src={ad.imageUrl} className="card-img-top" alt={ad.title} />
                    <div className="card-body">
                        <h5 className="card-title">{ad.title}</h5>
                        <p className="card-text">Price: ${ad.price}</p>
                        <p className="card-text">Created On: {new Date(ad.datecreated).toLocaleDateString()}</p>
                        <Link to={`/ads/${ad._id}`} className="btn btn-primary">View Details</Link>
                        {(role === 'admin' || role === 'dealer') && (
                            <>
                                <button className="btn btn-danger me-2" onClick={() => onDelete(ad._id)}>Delete</button>
                                <Link to={`/ads/edit/${ad._id}`} className="btn btn-secondary">Edit</Link>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdListComponent;
