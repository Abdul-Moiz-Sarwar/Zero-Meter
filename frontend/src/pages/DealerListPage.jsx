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
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this dealer?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/accounts/deleteDealer/${id}`, { withCredentials: true });
        const updatedDealers = allDealers.filter(dealer => dealer._id !== id);
        setAllDealers(updatedDealers);
        setFilteredDealers(updatedDealers);
      } catch (error) {
        console.error('Error deleting dealer:', error);
      }
    }
  };

  return (
    <div className='bg-light p-5'>
      <div className="d-flex flex-row justify-content-between">
        <h1>Dealerships List</h1>
        <div className="w-50">
          <div className="input-group justify-content-center align-items-center">
            <input
              type="text"
              className="form-control mx-2"
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

      <div className='d-flex flex-column gap-2 p-5'>
        {filteredDealers.map((dealer,index) => (
          <div key={dealer._id} className="card flex-row justify-content-between shadow p-3">
            <div className='d-flex flex-row gap-3 align-items-center'>
              <h3>{dealer.name}</h3>
              <p className='m-0'>{dealer.registration}</p>
            </div>
            <div className="d-flex justify-content-center" style={{ gap: '10px' }}>
                <Link to={`/dealer/${index}`} className="btn btn-primary">Details</Link>
                {role === 'admin' && (
                  <button onClick={() => handleDelete(dealer._id)} className="btn btn-danger">Delete</button>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealerListPage;
