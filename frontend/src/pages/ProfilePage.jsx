import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileDetailsComponent from './ProfileDetailsComponent';
import { Button } from 'react-bootstrap';

const ProfilePage = ({ role }) => {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/accounts/getUser', { withCredentials: true });
                console.log(res.data.user)
                setUser(res.data.user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="p-5 bg-light">
            <div className="d-flex justify-content-between">
                <h1>Profile</h1>
                <Button className="btn btn-primary mb-3" onClick={handleEdit}>{isEditing ? 'Cancel' : 'Edit Profile'}</Button>
            </div>
            {user ? (
                <ProfileDetailsComponent user={user} role={role} isEditing={isEditing} setIsEditing={setIsEditing} setUser={setUser} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProfilePage;
