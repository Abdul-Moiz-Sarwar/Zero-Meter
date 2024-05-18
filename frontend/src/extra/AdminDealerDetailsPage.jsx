import React from 'react';
import { useParams } from 'react-router-dom';
import DealerDetailsPage from '../pages/DealerDetailsPage'; // Assuming you want to reuse the existing DealerDetailsPage component

const AdminDealerDetailsPage = ({ dealers }) => {
  const { id } = useParams();

  return (
    <div>
      <DealerDetailsPage dealers={dealers}/>
    </div>
  );
};

export default AdminDealerDetailsPage;
