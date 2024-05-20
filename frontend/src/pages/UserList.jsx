import React from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  return (
    <div className="container mt-5">
      <div className="list-group">
        {userData.map((user) => (
          <div key={user.id} className="list-group-item d-flex align-items-center mb-4 p-4" style={{ width: '600px', height: '150px' }}>
            <img src={user.avatar} alt={user.name} className="rounded-circle mr-3" style={{ width: '80px', height: '80px' }} />
            <div className="flex-grow-1">
              <h5 className="mb-1">{user.name}</h5>
              <p className="mb-1">{user.email}</p>
              <p className="mb-1">{user.phone}</p>
            </div>
            <Link to={`/userlist/${user.id}`} className="btn btn-primary ml-3">View Details</Link>
            <button className="btn btn-danger me-2" onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
