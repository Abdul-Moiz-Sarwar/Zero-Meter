import React from 'react';
import { Link } from 'react-router-dom';
import './BlogComponent.css';

const BlogComponent = ({ blog, role, onDelete }) => {
  return (
    <div className="card shadow p-4">
      <h2>{blog.title}</h2>
      <p>Author: {blog.author}</p>
      <p>Date: {blog.datecreated}</p>
      <Link className="btn btn-primary my-1" to={`/blogs/${blog._id}`}>Read More</Link>
      {role === 'admin' && (
        <div className='d-flex flex-row gap-1'>
          <button className="btn btn-danger w-100" onClick={() => onDelete(blog._id)}>Delete</button>
          <Link to={`/blogs/edit/${blog._id}`} className="btn btn-secondary w-100">Edit</Link>
        </div>
      )}
    </div>
  );
};

export default BlogComponent;
