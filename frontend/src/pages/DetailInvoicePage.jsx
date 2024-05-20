import React from 'react';
import { useParams } from 'react-router-dom';
import InvoiceDetailComponent from './InvoiceDetailComponent';

const DetailInvoicePage = ({role}) => {
  const { id } = useParams();

  return (
    <div className='bg-light p-5'>
      <h1>Invoice Details</h1>
      <InvoiceDetailComponent invoiceId={id} role={role} />
    </div>
  );
};

export default DetailInvoicePage;
