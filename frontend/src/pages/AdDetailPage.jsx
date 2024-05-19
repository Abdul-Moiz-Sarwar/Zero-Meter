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

    const handleBuyNow = () => {
        navigate(`/checkout?adId=${ad._id}&price=${ad.price}&company=${vehicle.company}&model=${vehicle.model}&variant=${vehicle.varient}&color=${vehicle.color}`);
    };

    if (!ad || !vehicle) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-light p-5'>
            <AdDetailComponent ad={ad} vehicle={vehicle} role={role} onBuyNow={handleBuyNow} />
        </div>
    );
};

export default AdDetailPage;
