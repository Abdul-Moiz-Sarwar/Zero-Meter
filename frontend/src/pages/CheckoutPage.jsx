import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const adId = queryParams.get('adId');
  const price = queryParams.get('price');
  const company = queryParams.get('company');
  const model = queryParams.get('model');
  const variant = queryParams.get('variant');
  const color = queryParams.get('color');  

  const handleConfirmOrder = async () => {
    try {
      // Fetch the entire ad object based on the provided ad ID
      const response = await axios.get(`http://localhost:3000/ads/${adId}`, { withCredentials: true });
      const ad = response.data;

      // Create the invoice object to be stored in the database
      const invoiceData = {
        ad: ad, // Store the entire ad object
        amount: price,
        status: 'unpaid',
        datedue: new Date(Date.now() + 1000 * 30 * 3600 * 24 * 7), // One week
        datecreated: Date.now(),
      };

      // Save the invoice to the database
      await axios.post('http://localhost:3000/invoices', invoiceData, { withCredentials: true });

      // Redirect to invoices list after confirming the order
      navigate("/invoices");
    } catch (error) {
      console.error('Error confirming order:', error);
    }
  };

  const handleAddNewPaymentMethod = () => {
    // Redirect to the payment form to add a new payment method
    navigate("/payment");
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <hr />
      <h2>Order Details</h2>
      <p>Price: ${price}</p>
      <p>Company: {company}</p>
      <p>Model: {model}</p>
      <p>Variant: {variant}</p>
      <p>Color: {color}</p>

      <hr />
      <h3>Payment Information</h3>
      <select value="" onChange={() => {}}>
        <option value="">Select Payment Method</option>
        <option value="Payment Method 1">Payment Method 1</option>
        <option value="Payment Method 2">Payment Method 2</option>
      </select>
      <button onClick={handleAddNewPaymentMethod} style={{ marginLeft: '10px' }}>New Payment Method</button>

      <hr />

      <h3>Total Amount: ${price}</h3>
      <button onClick={handleConfirmOrder} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 24px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Confirm</button>
    </div>
  );
};

export default CheckoutPage;
