// DetailInvoicePage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import InvoiceDetailComponent from './InvoiceDetailComponent';

const DetailInvoicePage = () => {
  const [invoice, setInvoice] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/invoices/${id}`, { withCredentials: true });
        setInvoice(res.data);
      } catch (error) {
        console.error('Error fetching invoice data:', error);
      }
    };
    fetchInvoice();
  }, [id]);

  if (!invoice) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <InvoiceDetailComponent invoice={invoice} />
    </div>
  );
}

export default DetailInvoicePage;
