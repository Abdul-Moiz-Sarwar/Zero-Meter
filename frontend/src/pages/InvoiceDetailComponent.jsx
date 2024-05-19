// InvoiceDetailComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const InvoiceDetailComponent = ({ invoiceId }) => {
  const [invoice, setInvoice] = useState(null);
  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/invoices/${invoiceId}`, { withCredentials: true });
        setInvoice(res.data);
      } catch (error) {
        console.error('Error fetching invoice details:', error);
      }
    };
    fetchInvoice();
  }, [invoiceId]);

  if (!invoice) {
    return <div>Loading...</div>;
  }

  return (
    <div className='card p-5'>
      <h2>Invoice Details</h2>
      <p>Invoice ID: {invoice._id}</p>
      <p>Date Created: {invoice.datecreated}</p>
      <p>Amount: {invoice.amount}</p>
      <p>Status: {invoice.status}</p>
      <p>Due Date: {invoice.datedue}</p>
      <p>Date Paid: {invoice.datepaid}</p>
      <Link className="btn btn-primary w-100 py-2" to={`/invoices/pay/?id=${invoice._id}`}>Pay Invoice</Link>
    </div>
  );
};

export default InvoiceDetailComponent;
