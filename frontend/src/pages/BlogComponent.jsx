import React from 'react';
import { Link } from 'react-router-dom';
import './BlogComponent.css'; 

const BlogComponent = ({ blog }) => {
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
        <Link to={`/blogs/${blog.id}`}>Read More</Link>
      </div>
    </div>
  );
}

export default BlogComponent;
