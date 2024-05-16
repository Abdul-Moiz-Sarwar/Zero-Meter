// AdDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import AdminAdDetailComponent from './AdminAdDetailComponent';

const AdminAdDetailPage = ({ ads }) => {
  const { id } = useParams();
  const ad = ads.find(ad => ad.id === parseInt(id));

  if (!ad) {
    return <div>Ad not found</div>;
  }

  return (
    <div>
      <AdminAdDetailComponent ad={ad} />
    </div>
  );
}

export default AdminAdDetailPage;
