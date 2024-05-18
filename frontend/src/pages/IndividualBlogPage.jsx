import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './IndividualBlogPage.css'; 

const IndividualBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/blogs/${id}`, { withCredentials: true });
        setBlog(res.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="individual-blog">
      <h2 className="blog-title">{blog.title}</h2>
      <div className="author-date">
        <p className="author">Author: {blog.author}</p>
        <p className="date">Date: {blog.datecreated}</p>
      </div>
      <div className="blog-content">{blog.content}</div>
    </div>
  );
}

export default IndividualBlogPage;
