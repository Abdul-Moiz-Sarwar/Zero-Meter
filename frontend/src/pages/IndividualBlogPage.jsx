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
    <div className="bg-light p-5">
      <h2 className="blog-title">{blog.title}</h2>
      <hr/>
      <div className="d-flex flex-row justify-content-between">
        <p className="author m-0">Author: {blog.author}</p>
        <p className="date m-0">Date: {blog.datecreated}</p>
      </div>
      <hr/>
      <div className="blog-content">{blog.content}</div>
    </div>
  );
}

export default IndividualBlogPage;
