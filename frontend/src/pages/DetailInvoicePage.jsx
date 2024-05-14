import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import InvoiceDetailComponent from './InvoiceDetailComponent'; // Import InvoiceDetailComponent

const DetailInvoicePage = ({ invoices }) => {
  // Get the id parameter from the URL
  const { id } = useParams();
  
  // Find the invoice with the matching id
  const invoice = invoices.find(invoice => invoice.id === parseInt(id));

  // If the invoice is not found, display a message
  if (!invoice) {
    return <div>Invoice not found</div>;
  }

  return (
    <div>
      <InvoiceDetailComponent invoice={invoice} /> {/* Render InvoiceDetailComponent */}
    </div>
  );
}

export default DetailInvoicePage;
