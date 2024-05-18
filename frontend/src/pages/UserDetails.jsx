import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = ({ userData }) => {
  const { id } = useParams();
  const user = userData.find(user => user.id.toString() === id);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body d-flex">
          <img src={user.avatar} alt={user.name} className="rounded-circle mr-3" style={{ width: '100px', height: '100px' }} />
          <div>
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text"><strong>Email:</strong> {user.email}</p>
            <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
