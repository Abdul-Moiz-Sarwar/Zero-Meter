import React from 'react';
import { Link } from 'react-router-dom';

const InvoiceListComponent = ({ invoices }) => {
  return (
    <div>
      {invoices.map(invoice => (
        <div key={invoice._id}>
          <h2>Invoice ID: {invoice._id}</h2>
          <p>Date: {invoice.datecreated}</p>
          <p>Amount: {invoice.amount}</p>
          <p>Status: {invoice.status}</p>
          <Link to={`/invoices/${invoice._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default InvoiceListComponent;
