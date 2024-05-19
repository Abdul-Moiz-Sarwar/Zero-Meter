import React, {useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PayInvoicePage = () => {
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);  
  const id = queryParams.get('id');
  const navigate = useNavigate();

  const [adData, setAd] = useState(null);
  const [invoiceData, setInvoice] = useState(null);
  const [vehicleData, setVehicle] = useState(null);
  const [payment, setPayment] = useState('');
  const [payData, setPay] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const invoiceRes = await axios.get(`http://localhost:3000/invoices/${id}`, { withCredentials: true });
        setInvoice(invoiceRes.data);

        const adRes = await axios.get(`http://localhost:3000/ads/${invoiceRes.data.ad}`, { withCredentials: true });
        setAd(adRes.data);

        const vehicleRes = await axios.get(`http://localhost:3000/vehicles/${adRes.data.vehicle}`, { withCredentials: true });
        setVehicle(vehicleRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchPayments = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/payments/`, { withCredentials: true });
            setPay(res.data);
            setPayment(res.data[0]._id)
        } catch (error) {
            console.error('Error fetching payments data:', error);
        }
    };
    fetchPayments();
  }, []);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPayment(value);
  };

  const handleConfirmOrder = async () => {    
    console.log(payment)
    console.log(invoiceData._id)
    axios.put('http://localhost:3000/invoices/',{id:invoiceData._id,amount:adData.price},{withCredentials:true})
    //send pay req to stripe
  };

  const handleAddNewPaymentMethod = () => {
    navigate("/payment");
  };

  return (
    <div className='bg-light p-5'>
      <h1>Order Details</h1>

      <div className='card p-5'>
        {vehicleData && adData ? (
        <div className='d-flex flex-row justify-content-between'>
          <h1>{vehicleData.company} {vehicleData.model} {vehicleData.varient}</h1>
          <h1>${adData.price}</h1>
        </div>
        ) : (
          <p>Loading vehicle data...</p>
        )}
        <hr />

        <h3>Select Payment Method</h3>

        <div className='d-flex flex-row'>
          <div className="form-floating m-1 w-75">
              <select className="form-select" id="payment" name="payment" placeholder="type" value={payment} onChange={handleChange} required>
              {payData.map((pay) => (
                <option key={pay._id} value={pay._id}>
                  {pay.cardNumber}
                </option>
              ))}
              </select>
              <label htmlFor="payment">Payment Method</label>
          </div>
          <button onClick={handleAddNewPaymentMethod}  className="btn btn-primary w-25 m-1 py-2">New Payment Method</button>
        </div>
        <hr />

        <h3>Total Amount:{ adData? (<>{adData.price}</>) :(<p>loading ad data</p>)} </h3>
        <button onClick={handleConfirmOrder} className="btn btn-success w-100 m-1 py-2">Pay Invoice</button>
      </div>
    </div>
  );
};

export default PayInvoicePage;
