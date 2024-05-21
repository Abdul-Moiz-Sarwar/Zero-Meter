import React, {useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CheckoutPage = () => {
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);  
  const adId = queryParams.get('adId');

  const navigate = useNavigate();

  const [adData, setAd] = useState([])
  const [vehicleData, setVehicle] = useState([])

  useEffect(() => {
    const fetchAd = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/ads/${adId}`, { withCredentials: true });
            setAd(res.data);
            const vehicleRes = await axios.get(`http://localhost:3000/vehicles/${res.data.vehicle}`, { withCredentials: true });
            setVehicle(vehicleRes.data);
        } catch (error) {
            console.error('Error fetching ad data:', error);
        }
    };
    fetchAd();
  }, []);


  const handleConfirmOrder = async () => {    
    const invoice = {
      ad : adData._id,
      amount : adData.price
    }
    axios.post('http://localhost:3000/invoices/',invoice,{withCredentials:true})
    .then( (res,err) => {console.log(res.data); navigate('/invoices');})
  };

  return (
    <div className='bg-light p-5'>
      <h1>Order Details</h1>

      <div className='card p-5'>

        <div className='d-flex flex-row justify-content-between'>
          <h1>{vehicleData.company} {vehicleData.model} {vehicleData.varient}</h1>
          <h1>${adData.price}</h1>
        </div>
        <hr />

        <h3>Total Amount: ${adData.price}</h3>
        <button onClick={handleConfirmOrder} className="btn btn-success w-100 m-1 py-2">Generate Invoice</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
