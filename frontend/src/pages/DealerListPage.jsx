import React from 'react';
import { Link } from 'react-router-dom';

const DealerListPage = ({ dealers }) => {
    return (
      <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Dealer List</h1>
        {dealers.map(dealer => (
          <div key={dealer.id} className="dealer-item" style={{ marginBottom: '20px' }}>
            <img src={dealer.image} alt={dealer.name} style={{ maxWidth: '100%', marginBottom: '10px' }}/>
            <div>
              <h3 style={{ textAlign: 'center' }}>{dealer.name}</h3>
              <p style={{ textAlign: 'center' }}> Email: {dealer.email}</p>
              <Link to={`/dealer/${dealer.id}`} className="btn btn-primary" >Details</Link>
            </div>
          </div>
        ))}
      </div>
    );
  };  

export default DealerListPage;
