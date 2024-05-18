// InvoiceDetailComponent.js
import React from 'react';

const InvoiceDetailComponent = ({ invoice }) => {
  return (
    <div>
      <h2>Invoice Number: {invoice._id}</h2>
      <p>Date: {invoice.datecreated}</p>
      <p>Total Amount: {invoice.amount}</p>
      <p>Status: {invoice.status}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default InvoiceDetailComponent;
