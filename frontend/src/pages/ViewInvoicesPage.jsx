// ViewInvoicesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InvoiceListComponent from './InvoiceListComponent';

const ViewInvoicesPage = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await axios.get('http://localhost:3000/invoices/', { withCredentials: true });
        setInvoices(res.data);
      } catch (error) {
        console.error('Error fetching invoices data:', error);
      }
    };
    fetchInvoices();
  }, []);

  return (
    <div className='bg-light p-5'>
      <h1>All Invoices</h1>
      <InvoiceListComponent invoices={invoices} />
    </div>
  );
}

export default ViewInvoicesPage;
