import React from 'react';
import { Link } from 'react-router-dom';

const AdminAdListComponent = ({ ads, onDelete }) => {
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
          <Link to={`/admin/ads/${ad.id}`}>View Details</Link> {/* Link to ad detail page */}
          <button onClick={() => onDelete(ad.id)}>Delete</button> {/* Delete button */}
        </div>
      ))}
    </div>
  );
}

export default AdminAdListComponent;