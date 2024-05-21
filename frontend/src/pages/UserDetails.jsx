import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileDetailsComponent from './ProfileDetailsComponent';

const UserDetailsPage = () => {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div>
      <h1>User Details</h1>
      <ProfileDetailsComponent user={user} role={user.type} isEditing={false} />
    </div>
  );
};

export default UserDetailsPage;
