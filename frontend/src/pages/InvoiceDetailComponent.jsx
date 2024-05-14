import React from 'react';

const InvoiceDetailComponent = ({ invoice }) => {
  return (
    <div>
      <h2>Invoice Number: {invoice.invoiceNumber}</h2>
      <p>Date: {invoice.date}</p>
      <p>Total Amount: {invoice.amount}</p>
      <p>Description: {invoice.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default InvoiceDetailComponent;
