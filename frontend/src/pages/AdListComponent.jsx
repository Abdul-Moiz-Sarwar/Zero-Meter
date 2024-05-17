import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdListComponent = ({ ads, onDelete, role }) => {
  const navigate = useNavigate();

  const handleBuyNow = (adId) => {
    navigate(`/payment`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {ads.map(ad => (
        <div key={ad.id} style={{ marginBottom: '20px' }}>
          <h3 style={{ textAlign: 'center' }}>{ad.title}</h3>
          <img src={ad.imageUrl} alt={ad.title} style={{ maxWidth: '100%', marginBottom: '10px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <p>Start Date: {ad.startDate}</p>
            <p>End Date: {ad.endDate}</p>
          </div>
          <p style={{ textAlign: 'center' }}>{ad.description}</p>
          <Link to={`/ads/${ad.id}`} className="btn btn-primary" style={{ display: 'block', margin: '10px auto' }}>View Details</Link> 

          { (role === 'admin' || role === 'dealer') && (
            <button onClick={() => onDelete(ad.id)} className="btn btn-danger" style={{ margin: '5px' }}>Delete</button>
          )}
          { role === 'dealer' && (
            <Link to={`/ads/edit/${ad.id}`} className="btn btn-secondary" style={{ margin: '5px' }}>Edit</Link>
          )}
           { (role === 'user') && (
            <button onClick={() => handleBuyNow(ad.id)} style={{ marginLeft: '10px' }}>Buy Now</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdListComponent;
