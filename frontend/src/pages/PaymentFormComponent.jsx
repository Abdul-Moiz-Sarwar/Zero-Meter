import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentFormComponent = () => {
  
  const navigator = useNavigate();

  const [formData, setFormData] = useState({
    cardNumber: '',
    cvc: '',
    expire: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/payments/`,formData, { withCredentials: true })
    .then( (res,err) => {console.log(res.data); navigator('/payments');})
  };

  return (
      <form onSubmit={handleSubmit} className="form w-100 m-auto p-5 bg-light" >
        <div className="form-floating m-1">
            <input type="text" className="form-control" id="cardNumber" placeholder="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
            <label htmlFor="cardNumber">Card Number</label>
        </div>
        <div className="form-floating m-1">
            <input type="text" className="form-control" id="cvc" placeholder="cvc" name="cvc" value={formData.cvc} onChange={handleChange} required />
            <label htmlFor="cvc">CVC</label>
        </div>
        <div className="form-floating m-1">
            <input type="text" className="form-control" id="expire" placeholder="expire" name="expire" value={formData.expire} onChange={handleChange} required />
            <label htmlFor="expire">Expiry Date</label>
        </div>
        <button type="submit" className="btn btn-primary w-100 py-2">Add Payment</button>
      </form>
  );
};

export default PaymentFormComponent;
