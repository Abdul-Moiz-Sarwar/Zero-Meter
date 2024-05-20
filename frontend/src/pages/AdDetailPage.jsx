import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AdDetailComponent from './AdDetailComponent';

const AdDetailPage = ({ role }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ad, setAd] = useState(null);
    const [vehicle, setVehicle] = useState(null);
    const [vehicles,setVehicles]=useState([])
    const [recs,setrecs]=[]
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
        const getrecs = async () => {
          try {
            const res = await axios.get('http://localhost:3000/recs/', { withCredentials: true });
            
            setrecs(res.data);
          } catch (error) {
            console.error('Error fetching rec data:', error);
          }
        };
    
        getrecs();
      }, []);
    
    

    const handleBuyNow = () => {
        navigate(`/checkout?adId=${ad._id}`);
    };

    if (!ad || !vehicle) {
        return <div>Loading...</div>;
    }

    console.log(recs)

    return (<>
        <div className='bg-light p-5'>
            <AdDetailComponent ad={ad} vehicle={vehicle} role={role} onBuyNow={handleBuyNow} />
        </div>
        </>
    );
};

export default AdDetailPage;
