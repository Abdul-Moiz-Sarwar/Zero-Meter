import React from 'react';
import { useParams } from 'react-router-dom';
import './IndividualBlogPage.css'; 

const IndividualBlogPage = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="individual-blog">
      <h2 className="blog-title">{blog.title}</h2>
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="author-date">
        <p className="author">Author: {blog.author}</p>
        <p className="date">Date: {blog.date}</p>
      </div>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </div>
  );
}

export default IndividualBlogPage;
