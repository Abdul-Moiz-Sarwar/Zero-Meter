import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AdDetailComponent from './AdDetailComponent';

const AdDetailPage = ({ role }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ad, setAd] = useState(null);
    const [vehicle, setVehicle] = useState(null);
    const [vehicles, setVehicles] = useState([]);
    const [recs, setRecs] = useState([]);
    const [adrecs, setAdRecs] = useState([]);

    useEffect(() => {
        const fetchAd = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/ads/${id}`, { withCredentials: true });
                setAd(res.data);

                const vehicleRes = await axios.get(`http://localhost:3000/vehicles/${res.data.vehicle}`, { withCredentials: true });
                setVehicle(vehicleRes.data);
            } catch (error) {
                console.error('Error fetching ad data:', error);
            }
        };
        fetchAd();
    }, [id]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const res = await axios.get('http://localhost:3000/vehicles/all', { withCredentials: true });
                setVehicles(res.data);
            } catch (error) {
                console.error('Error fetching vehicle data:', error);
            }
        };
        fetchVehicles();
    }, []);

    useEffect(() => {
        const getRecs = async () => {
            try {
                const res = await axios.get('http://localhost:3000/recs/', { withCredentials: true });
                setRecs(res.data);
                console.log("Recommendations fetched");
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            }
        };
        getRecs();
    }, []);

    useEffect(() => {
        if (ad && recs.length > 0 && vehicles.length > 0) {
            const findVehicleIndex = (vehicleId) => vehicles.findIndex(vehicle => vehicle._id === vehicleId);
            const vehicleIndex = findVehicleIndex(ad.vehicle);

            if (vehicleIndex !== -1) {
                setAdRecs(recs[vehicleIndex]);
                console.log("Recs are ", recs[vehicleIndex]);
            }
        }
    }, [ad, recs, vehicles]);

    const handleBuyNow = () => {
        navigate(`/checkout?adId=${ad._id}`);
    };

    if (!ad || !vehicle) {
        return <div>Loading...</div>;
    }

    console.log("Recommendations are:", adrecs);

    return (
        <div className='bg-light p-5'>
            <AdDetailComponent ad={ad} vehicle={vehicle} role={role} onBuyNow={handleBuyNow} />
            <hr/>
            {adrecs.length > 0 && (
                <div>
                    <h3>Recommended Vehicles</h3>
                    <div className='d-flex flex-column gap-3 p-5'>
                        {adrecs.map((recIndex) => (
                            <div className='card shadow p-3 d-flex flex-row justify-content-between align-items-center'>
                                <h3 key={recIndex}>{vehicles[recIndex].company} {vehicles[recIndex].model} {vehicles[recIndex].varient}</h3>
                                <h3 className='m-0'>{vehicles[recIndex].buyprice}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdDetailPage;
