import React from 'react';
import { Link } from 'react-router-dom';
import './BlogComponent.css';

const BlogComponent = ({ blog, role, onDelete }) => {
  return (
    <div className="blog-container">
      <div className="image-container">
        <img src={blog.image} alt={blog.title} />
      </div>
      <div className="content-container">
        <h2>{blog.title}</h2>
        <p>Author: {blog.author}</p>
        <p>Date: {blog.datecreated}</p>
        <Link to={`/blogs/${blog._id}`}>Read More</Link>
        {role === 'admin' && (
          <>
            <button className="btn btn-danger me-2" onClick={() => onDelete(blog._id)}>Delete</button>
            <Link to={`/blogs/edit/${blog._id}`} className="btn btn-secondary">Edit</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogComponent;
