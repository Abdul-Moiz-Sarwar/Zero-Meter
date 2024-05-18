import React from 'react';

const AdminAdDetailComponent = ({ ad }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{ad.title}</h2>
      <img src={ad.imageUrl} alt={ad.title} style={{ maxWidth: '100%', marginBottom: '20px' }} />
      <p>Description: {ad.description}</p>
      <p>Start Date: {ad.startDate}</p>
      <p>End Date: {ad.endDate}</p>
    </div>
  );
}

export default AdminAdDetailComponent;
