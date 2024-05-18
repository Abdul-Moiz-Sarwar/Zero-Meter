import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogComponent from './BlogComponent';
import { Link } from 'react-router-dom';

const Blogs = ({ role }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:3000/blogs/', { withCredentials: true });
        setBlogs(res.data);
      } catch (error) {
        console.error('Error fetching blogs data:', error);
      }
    };
    fetchBlogs();
  }, []);

  const handleDeleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/blogs/${id}`, { withCredentials: true });
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error('Error deleting blogs data:', error);
    }
  };

  return (
    <div className="blogs-container">
      {blogs.map((blog) => (
        <BlogComponent key={blog._id} blog={blog} role={role} onDelete={handleDeleteBlog} />
      ))}
      {role === 'admin' && (
        <>
            <Link to="/blogs/add" className="btn btn-primary mb-3">
              Add Blog
            </Link>
        </>
      )}
    </div>
  );
};

export default Blogs;
