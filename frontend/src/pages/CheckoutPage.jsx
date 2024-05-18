// CheckoutPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = ({ ad }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    // Here you can generate and save the invoice
    const invoice = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID for the invoice (dummy)
      date: new Date().toISOString().slice(0, 10), // Current date
      amount: "$10000", // Fixed amount for now
      description: ad.title // You can customize the description as needed
    };

    // Redirect to invoices list after confirming the order
    navigate("/invoices");

    // You can save the invoice to the invoice list here
    console.log("Invoice generated:", invoice);
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleAddNewPaymentMethod = () => {
    // Redirect to the payment form to add a new payment method
    navigate("/payment");
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>{ad.title}</h2>
      <img src={ad.imageUrl} alt={ad.title} style={{ maxWidth: '100%', marginBottom: '10px' }} />
      <p><strong>Description:</strong> {ad.description}</p>
      <p><strong>Start Date:</strong> {ad.startDate}</p>
      <p><strong>End Date:</strong> {ad.endDate}</p>

      <hr />

      <h3>Payment Information</h3>
      <select value={selectedPaymentMethod} onChange={handlePaymentMethodChange}>
        <option value="">Select Payment Method</option>
        <option value="Payment Method 1">Payment Method 1</option>
        <option value="Payment Method 2">Payment Method 2</option>
      </select>
      <button onClick={handleAddNewPaymentMethod} style={{ marginLeft: '10px' }}>Add New Payment Method</button>

      <hr />

      <h3>Total Amount: $10000</h3>
      <button onClick={handleConfirmOrder} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 24px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Confirm</button>
    </div>
  );
};

export default CheckoutPage;
