import React from 'react';
//import { useHistory } from 'react-router-dom';
import PaymentFormComponent from './PaymentFormComponent';

const PaymentPage = () => {
  //const history = useHistory();

  const handleSubmit = (formData) => {
    // Here you can send the payment data to your backend for processing
    // After successful submission, you can redirect the user to the vehicle page
    // You can also show a success message
    console.log(formData); // Placeholder for submitting payment data
    alert('Payment saved');
  //  history.push('/vehicles'); // Redirect to the vehicles page
  };

  return (
    <div>
      <PaymentFormComponent onSubmit={handleSubmit} />
    </div>
  );
};

export default PaymentPage;