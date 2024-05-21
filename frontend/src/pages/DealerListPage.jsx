import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DealerListPage = ({ role }) => {
  const [allDealers, setAllDealers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDealers, setFilteredDealers] = useState([]);

  useEffect(() => {
    const fetchDealers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/accounts/getAllDealers', { withCredentials: true });
        const dealers = res.data.dealers || [];
        setAllDealers(dealers);
        setFilteredDealers(dealers);
        console.log(dealers);
      } catch (error) {
        console.error('Error fetching dealers data:', error);
      }
    };

    fetchDealers();
  }, []);

  // Function to handle search
  
  const handleSearch = () => {
    console.log("search",typeof(searchQuery))
    setSearchQuery(String(searchQuery))
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setFilteredDealers(allDealers);
      console.log("all");
    } else {
      const filtered = allDealers.filter(dealer =>
        dealer.name.toLowerCase().includes(query) 
        
      );
      console.log("Filtered", filtered);
      setFilteredDealers(filtered);
    }
  };

  // Function to handle delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this dealer?");
    if (confirmDelete) {
      const updatedDealers = allDealers.filter(dealer => dealer.id !== id);
      setAllDealers(updatedDealers);
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
        {filteredDealers.map((dealer,index) => (
          <div key={dealer.id} className="dealer-item" style={{ marginBottom: '20px' }}>
            <img src={dealer.image} alt={dealer.name} style={{ maxWidth: '100%', marginBottom: '10px' }} />
            <div>
              <h3 style={{ textAlign: 'center' }}>{dealer.name}</h3>
              <p style={{ textAlign: 'center' }}> Email: {dealer.email}</p>
              <div className="d-flex justify-content-center" style={{ gap: '10px' }}>
                <Link to={`/dealer/${index}`} className="btn btn-primary">Details</Link>
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
