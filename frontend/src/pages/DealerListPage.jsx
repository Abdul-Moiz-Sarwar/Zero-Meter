import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DealerListPage = ({ dealers, role }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDealers, setFilteredDealers] = useState(dealers);

  // Function to handle search
  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setFilteredDealers(dealers);
    } else {
      const filtered = dealers.filter(dealer =>
        dealer.name.toLowerCase().includes(query) ||
        dealer.email.toLowerCase().includes(query)
      );
      setFilteredDealers(filtered);
    }
  };

  // Function to handle delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this dealer?");
    if (confirmDelete) {
      const updatedDealers = dealers.filter(dealer => dealer.id !== id);
      setFilteredDealers(updatedDealers);
    }
  };

  return (
    <div>
      <div className="row justify-content-end mt-3">
        <div className="col-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name or email"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Dealer List</h1>
        {filteredDealers.map(dealer => (
          <div key={dealer.id} className="dealer-item" style={{ marginBottom: '20px' }}>
            <img src={dealer.image} alt={dealer.name} style={{ maxWidth: '100%', marginBottom: '10px' }} />
            <div>
              <h3 style={{ textAlign: 'center' }}>{dealer.name}</h3>
              <p style={{ textAlign: 'center' }}> Email: {dealer.email}</p>
              <div className="d-flex justify-content-center" style={{ gap: '10px' }}>
                <Link to={`/dealer/${dealer.id}`} className="btn btn-primary">Details</Link>
                {role === 'admin' && (
                  <button onClick={() => handleDelete(dealer.id)} className="btn btn-danger">Delete</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealerListPage;
