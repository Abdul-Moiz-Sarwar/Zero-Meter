import React from 'react';
import { useParams } from 'react-router-dom';
import AdForm from '../extra/AdForm';

const AdEditPage = ({ ads, onSave }) => {
  const { id } = useParams();
  const ad = ads.find(ad => ad.id === parseInt(id));

  const handleSubmit = (formData) => {
    onSave(formData, ad ? ad.id : null);
  };

  return (
    <div>
      <h1>{ad ? 'Edit Ad' : 'Add New Ad'}</h1>
      <AdForm onSubmit={handleSubmit} initialValues={ad} />
    </div>
  );
}

export default AdEditPage;
