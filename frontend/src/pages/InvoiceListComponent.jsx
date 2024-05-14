// InvoiceListComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

const InvoiceListComponent = ({ invoices }) => {
  return (
    <div>
      {invoices.map(invoice => (
        <div key={invoice.id}>
          <h2>Invoice ID: {invoice.id}</h2>
          <p>Date: {invoice.date}</p>
          <p>Amount: {invoice.amount}</p>
          <p>Description: {invoice.description}</p>
          <Link to={`/invoices/${invoice.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default InvoiceListComponent;
