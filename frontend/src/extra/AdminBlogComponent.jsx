import React from 'react';
import { Link } from 'react-router-dom';
//import './BlogComponent.css'; 

const AdminBlogComponent = ({ blog, onDelete }) => {
    return (
      <div className="blog-container">
        <div className="image-container">
          <img src={blog.image} alt={blog.title} />
        </div>
        <div className="content-container">
          <h2>{blog.title}</h2>
          <p>Author: {blog.author}</p>
          <p>Date: {blog.date}</p>
          <p>{blog.summary}</p>
          <div>
            <Link to={`/admin/blogs/${blog.id}/edit`} className="btn btn-primary">Edit</Link>
            <button onClick={() => onDelete(blog.id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
  
export default AdminBlogComponent;
