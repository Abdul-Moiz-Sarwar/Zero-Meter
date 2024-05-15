import React, { useState } from 'react';

const PaymentFormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardType: '',
    cvv: '',
    expiryDate: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform validation before submitting the form
    onSubmit(formData);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="Card Number" required />
        <input type="text" name="cardType" value={formData.cardType} onChange={handleChange} placeholder="Card Type" required />
        <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="CVV" required />
        <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} placeholder="Expiry Date" required />
        {/* Add more input fields for other details */}
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentFormComponent;
