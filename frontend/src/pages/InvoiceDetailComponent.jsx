import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const InvoiceDetailComponent = ({ invoiceId, role }) => {
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
      {role ==='user' &&(
        <>
          <Link className="btn btn-primary w-100 py-2" to={`/invoices/pay/?id=${invoice._id}`}>Pay Invoice</Link>
        </>
      ) }
      
      {/* Add Download button for PDF */}
      <PDFDownloadLink document={<InvoicePDF invoice={invoice} />} fileName="invoice.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
};

// Define a separate component to render the PDF
const InvoicePDF = ({ invoice }) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Invoice ID: {invoice._id}</Text>
          <Text>Date Created: {invoice.datecreated}</Text>
          <Text>Amount: {invoice.amount}</Text>
          <Text>Status: {invoice.status}</Text>
          <Text>Due Date: {invoice.datedue}</Text>
          <Text>Date Paid: {invoice.datepaid}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceDetailComponent;
