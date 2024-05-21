import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


// Define the URL for the user icon
const USER_ICON_URL = 'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png';

const UserList = () => {

  const Navigate=useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/accounts/getAllUsers', { withCredentials: true });
        const users = res.data.users || [];
        setAllUsers(users);
        setFilteredUsers(users);
        console.log(users);
      } catch (error) {
        console.error('Error fetching users data:', error);
      }
    };

    fetchUsers();
  }, []);

  const toggleView = () => {
    setIsGridView(prevState => !prevState);
  };

  const handleViewUserDetails = async (userId) => {
    try {
      const res = await axios.get(`http://localhost:3000/accounts/getUser`);
      Navigate('/user-details', { user: res.data.user });
    } catch (error) {
      console.error('Error fetching user details:', error);
      alert('An error occurred while fetching user details.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={toggleView}>
          {isGridView ? 'List View' : 'Grid View'}
        </button>
      </div>
      {isGridView ? (
        <div className="row row-cols-2">
          {filteredUsers.map((user) => (
            <div key={user.id} className="col-md-6 mb-4">
              <div className="list-group-item d-flex align-items-center p-4 h-100" style={{ height: '150px' }}>
                <img src={USER_ICON_URL} alt="User Icon" className="rounded-circle mr-3" style={{ width: '80px', height: '80px' }} />
                <div className="d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <h5 className="mb-1">{user.name}</h5>
                    <p className="mb-1">{user.email}</p>
                  </div>
                  <p className="mb-0">{user.phone}</p>
                </div>
                <button onClick={() => handleViewUserDetails(user.id)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="list-group">
          {filteredUsers.map((user) => (
            <div key={user.id} className="list-group-item d-flex align-items-center mb-4 p-4" style={{ width: '100%', height: '150px' }}>
              <img src={USER_ICON_URL} alt="User Icon" className="rounded-circle mr-3" style={{ width: '80px', height: '80px' }} />
              <div className="d-flex flex-column justify-content-between flex-grow-1">
                <div>
                  <h5 className="mb-1">{user.name}</h5>
                  <p className="mb-1">{user.email}</p>
                </div>
                <p className="mb-0">{user.phone}</p>
              </div>
              <button onClick={() => handleViewUserDetails(user.id)}>View Details</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
