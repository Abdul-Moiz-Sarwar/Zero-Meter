import React, { useState } from 'react';

const AdForm = ({ onSubmit, initialValues }) => {
  const [formData, setFormData] = useState(initialValues || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormData(prevState => ({
        ...prevState,
        imageUrl: reader.result,
      }));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title || ''} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description || ''} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <label>
        Start Date:
        <input type="date" name="startDate" value={formData.startDate || ''} onChange={handleChange} />
      </label>
      <label>
        End Date:
        <input type="date" name="endDate" value={formData.endDate || ''} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdForm;
