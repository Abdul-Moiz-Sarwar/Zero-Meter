import React from 'react';
import { useParams } from 'react-router-dom';

const DealerDetailsPage = ({ dealers }) => {
  const { id } = useParams();
  const dealer = dealers.find(dealer => dealer.id === parseInt(id));

  if (!dealer) {
    return <div>Dealer not found</div>;
  }

  return (
    <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>{dealer.name}</h1>
      <div className="dealer-details">
        <img src={dealer.image} alt={dealer.name} />
        <div>
          <h3 style={{ textAlign: 'center' }}>Contact Information</h3>
          <p style={{ textAlign: 'center' }}>Email: {dealer.email}</p>
          <h3 style={{ textAlign: 'center' }}>Address</h3>
          <p style={{ textAlign: 'center' }}>{dealer.address}</p>
          {/* Add more dealer details here */}
        </div>
      </div>
    </div>
  );
};

export default DealerDetailsPage;
