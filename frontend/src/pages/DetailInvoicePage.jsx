import React from 'react';
import { useParams } from 'react-router-dom';
import InvoiceDetailComponent from './InvoiceDetailComponent';

const DetailInvoicePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-center">Invoice Details</h1>
      <InvoiceDetailComponent invoiceId={id} />
    </div>
  );
};

export default DetailInvoicePage;
