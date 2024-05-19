import React from 'react';
import { Link } from 'react-router-dom';

const InvoiceListComponent = ({ invoices }) => {
  return (
    <div className='d-flex flex-column p-5 gap-1'>
      {invoices.map(invoice => (
        <div className='card shadow p-4' key={invoice._id}>
          <h2>Invoice ID: {invoice._id}</h2>
          <p>Date: {invoice.datecreated}</p>
          <p>Amount: {invoice.amount}</p>
          <p>Status: {invoice.status}</p>
          <Link className="btn btn-primary w-100 py-2" to={`/invoices/${invoice._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default InvoiceListComponent;
