import React from 'react';
import PaymentFormComponent from './PaymentFormComponent';

const PaymentPage = () => {
  return (
    <div className='bg-light p-5'>
      <h1>Add New Payment</h1>
      <PaymentFormComponent/>
    </div>
  );
};

export default PaymentPage;