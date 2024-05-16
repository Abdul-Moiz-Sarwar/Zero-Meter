import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserAdListComponent = ({ ads }) => {
  const navigate = useNavigate();

  const handleBuyNow = (adId) => {
    // Redirect to payment page with adId
    navigate(`/payment`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {ads.map(ad => (
        <div key={ad.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', width: '300px' }}>
          <h3 style={{ textAlign: 'center' }}>{ad.title}</h3>
          <img src={ad.imageUrl} alt={ad.title} style={{ maxWidth: '100%', marginBottom: '10px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <p>Start Date: {ad.startDate}</p>
            <p>End Date: {ad.endDate}</p>
          </div>
          <p style={{ textAlign: 'center' }}>{ad.description}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Link to={`/ads/${ad.id}`}>View Details</Link> {/* Link to ad detail page */}
            <button onClick={() => handleBuyNow(ad.id)} style={{ marginLeft: '10px' }}>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserAdListComponent;