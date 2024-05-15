// AdDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import AdDetailComponent from './AdDetailComponent';

const AdDetailPage = ({ ads }) => {
  const { id } = useParams();
  const ad = ads.find(ad => ad.id === parseInt(id));

  if (!ad) {
    return <div>Ad not found</div>;
  }

  return (
    <div>
      <AdDetailComponent ad={ad} />
    </div>
  );
}

export default AdDetailPage;
