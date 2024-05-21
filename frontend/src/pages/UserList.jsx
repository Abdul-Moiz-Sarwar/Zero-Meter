import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 

const USER_ICON_URL = 'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png';

const UserList = () => {
  const navigate = useNavigate();

  const [load, setLoad] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

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
  }, [load]);

  const handleViewUserDetails = (user) => {
    navigate('/user-details', { state: { user } });
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.put(`http://localhost:3000/accounts/deleteUser/${userId}`,[], { withCredentials: true });
      setLoad(!load)
    } catch (error) {
      console.error('Error blocked user:', error);
    }
  };

  const handleEnableUser = async (userId) => {
    try {
      await axios.put(`http://localhost:3000/accounts/enableUser/${userId}`,[], { withCredentials: true });
      setLoad(!load)
    } catch (error) {
      console.error('Error unblocking user:', error);
    }
  };

  return (
    <div className="bg-light p-5">

        <h1>Users List</h1>

      <div className='p-5'>
      
        
        <div className="list-group">
          {filteredUsers.map((user) => (
            <div key={user._id} className="list-group-item d-flex align-items-center justify-content-between mb-4 p-4 shadow rounded">
              <div className='d-flex flex-row'>
                <img src={USER_ICON_URL} alt="User Icon" className="rounded-circle me-4" style={{ width: '80px', height: '80px' }} />
                <div className="d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <h5 className="mb-1">{user.username}</h5>
                    <p className="mb-1">{user.email}</p>
                  </div>
                  <p className="mb-0">{user.phone}</p>
                </div>
              </div>

              <div className='d-flex flex-row w-25 gap-3' >
                {user.status === 'blocked' && (
                  <button className="btn btn-success ml-auto w-50" onClick={() => handleEnableUser(user._id)}>Unblock</button> 
                )}
                {user.status === 'active' && (
                  <button className="btn btn-danger ml-auto w-50" onClick={() => handleDeleteUser(user._id)}>Block</button> 
                )}
                <button className="btn btn-primary ml-auto w-50" onClick={() => handleViewUserDetails(user)}>View Details</button> {/* Add delete button */}
              </div>
            </div>
          ))}
        </div>
      
      </div>
      
    </div>
  );
};

export default UserList;
