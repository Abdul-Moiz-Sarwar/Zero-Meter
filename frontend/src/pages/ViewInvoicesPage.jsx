// ViewInvoicesPage.js
import React from 'react';
import InvoiceListComponent from './InvoiceListComponent';

const ViewInvoicesPage = () => {
  const invoices = [
    {
      id: 1,
      date: '2024-05-01',
      amount: '$1000',
      description: 'Invoice for Car Model A'
    },
    {
      id: 2,
      date: '2024-05-05',
      amount: '$1500',
      description: 'Invoice for Car Model B'
    },
    {
      id: 3,
      date: '2024-05-10',
      amount: '$2000',
      description: 'Invoice for Car Model C'
    }
  ];

  return (
    <div>
    <h1 className="text-center">All Invoices</h1>
      <InvoiceListComponent invoices={invoices} />
    </div>
  );
}

export default ViewInvoicesPage;
