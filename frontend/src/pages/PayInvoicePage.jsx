import React, {useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

const PayInvoicePage = () => {
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);  
  const id = queryParams.get('id');
  const navigate = useNavigate();

  
  const stripe = useStripe();
  const elements = useElements();


  const [adData, setAd] = useState(null);
  const [invoiceData, setInvoice] = useState(null);
  const [vehicleData, setVehicle] = useState(null);
  const [payment, setPayment] = useState('');
  const [payData, setPay] = useState([]);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const invoiceRes = await axios.get(`http://localhost:3000/invoices/${id}`, { withCredentials: true });
        setInvoice(invoiceRes.data);

        const adRes = await axios.get(`http://localhost:3000/ads/${invoiceRes.data.ad}`, { withCredentials: true });
        setAd(adRes.data);

        const vehicleRes = await axios.get(`http://localhost:3000/vehicles/${adRes.data.vehicle}`, { withCredentials: true });
        setVehicle(vehicleRes.data);

        const response = await axios.post('http://localhost:3000/invoices/createIntent', { invoiceId : invoiceRes.data._id, userId : invoiceRes.data.payee }, {withCredentials: true});
        setClientSecret(response.data.clientSecret);
      
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
            setPayment(res.data[0])
        } catch (error) {
            console.error('Error fetching payments data:', error);
        }
    };
    fetchPayments();
  }, []);

//   useEffect(() => {
//     const fetchPaymentIntent = async () => {
//         try {
//             const response = await axios.post('http://localhost:3000/createIntent', { invoiceId : invoiceData._id, userId : invoiceData.payee }, {withCredentials: true});
//             setClientSecret(response.data.clientSecret);
//         } catch (error) {
//             console.log(error)
//             console.log("Failed to initiate payment. Please try again.");
//         }
//     };
//     fetchPaymentIntent();
// }, [id]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPayment(value);
  };

  const handleConfirmOrder = async () => {    
    console.log(payment)
    console.log(invoiceData._id)

    if (!stripe || !elements) {
      return;
    }
    
    const { cardNumber, cvc, expire } = payment;
    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card : elements.getElement(CardElement),
        // card: {
        //     number: cardNumber,
        //     cvc: cvc,
        //     exp_month: parseInt(expire.split('/')[0]), // Extract and convert month to integer
        //     exp_year: parseInt(expire.split('/')[1]), // Extract and convert year to integer
        // },
    });

    if (error) {
        console.log(error.message);
        return;
    }  
    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (confirmError) {
        console.log(confirmError.message);
    } else {
        if (paymentIntent.status === "succeeded") {
            alert("Payment successful!");
        }
        else{
          console.log("failedtopay")
        }
    }
    axios.put('http://localhost:3000/invoices/',{invoiceId:invoiceData._id, adId:adData._id, vehicleId:adData.vehicle},{withCredentials:true})
    navigate('/invoices')
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
                <option key={pay._id} value={pay}>
                  {pay.cardNumber}
                </option>
              ))}
              </select>

              <div className="form-control">
                  <CardElement/>
              </div>
                
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
