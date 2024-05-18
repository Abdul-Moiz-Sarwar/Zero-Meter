// CheckoutPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const Navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const adId = queryParams.get('adId');
  const price = queryParams.get('price');
  const company = queryParams.get('company');
  const model = queryParams.get('model');
  const variant = queryParams.get('variant');
  const color = queryParams.get('color');  


  const handleConfirmOrder = () => {
    // Here you can generate and save the invoice
   // const invoice = {
     // adId: adId,
      //amount: price,
      //description: title,
      // Add more details as needed
    //};

    // Redirect to invoices list after confirming the order
    // In actual implementation, you might want to use an API call to save the invoice
    Navigate("/invoices");

    // You can save the invoice to the invoice list here
    console.log("Invoice generated:", invoice);
  };

  const handleAddNewPaymentMethod = () => {
    // Redirect to the payment form to add a new payment method
    Navigate("/payment");
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
