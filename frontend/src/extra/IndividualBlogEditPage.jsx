import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const IndividualBlogEditPage = ({ blogs, onSave }) => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    title: blog.title,
    author: blog.author,
    content: blog.content
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData, id);
    navigate(`/blogs/${id}`); // Redirect after saving
  };

  return (
    <div>
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
        </div>
        <div>
          <label>Content:</label>
          <textarea name="content" value={formData.content} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default IndividualBlogEditPage;
