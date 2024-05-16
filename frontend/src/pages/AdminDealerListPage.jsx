import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DealerService from './DealerService';

const AdminDealerListPage = ({ dealers }) => {
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
    <div className="container">
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
      
      <div className="row mt-3">
        {filteredDealers.map((dealer) => (
          <div key={dealer.id} className="col-md-4 mb-4">
            <div className="card text-center">
              <img src={dealer.image} className="card-img-top" alt={dealer.name} style={{ maxWidth: '100%' }} />
              <div className="card-body">
                <h5 className="card-title">{dealer.name}</h5>
                <p className="card-text">Email: {dealer.email}</p>
                <Link to={`/admin/dealers/${dealer.id}`} className="btn btn-primary mr-2">View Details</Link>
                <button onClick={() => handleDelete(dealer.id)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDealerListPage;
