import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import profile1 from './images/profile.png';

const UserProfilePage = () => {
  // Dummy user data
  const userData = {
    avatar: profile1, // Placeholder image URL
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Street, City, Country',
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          {/* Avatar, name, and edit profile link */}
          {userData.avatar && <img src={userData.avatar} alt="User Avatar" className="img-fluid rounded-circle mb-3" />}
          <h4>{userData.name}</h4>
          {/* Edit profile link */}
          {/* Assuming you have set up the route to /edit-profile */}
          <Link to="/edit-profile">Edit Profile</Link>
        </div>
        <div className="col-md-9">
          {/* Display user details */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Profile Details</h5>
              <p className="card-text">Email: {userData.email}</p>
              <p className="card-text">Phone: {userData.phone}</p>
              <p className="card-text">Address: {userData.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
