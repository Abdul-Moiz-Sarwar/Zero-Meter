import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AdDetailComponent from './AdDetailComponent';

const AdDetailPage = ({ role }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ad, setAd] = useState(null);
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        const fetchAd = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/ads/${id}`, { withCredentials: true });
                setAd(res.data);
                // Fetch the vehicle details
                const vehicleRes = await axios.get(`http://localhost:3000/vehicles/${res.data.vehicle}`, { withCredentials: true });
                setVehicle(vehicleRes.data);
            } catch (error) {
                console.error('Error fetching ad data:', error);
            }
        };
        fetchAd();
    }, [id]);

    const handleDeleteAd = async () => {
        try {
            await axios.delete(`http://localhost:3000/ads/${id}`, { withCredentials: true });
            navigate('/ads');
        } catch (error) {
            console.error('Error deleting ad data:', error);
        }
    };

    if (!ad || !vehicle) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <AdDetailComponent ad={ad} vehicle={vehicle} role={role} onDelete={handleDeleteAd} />
        </div>
    );
};

export default AdDetailPage;
