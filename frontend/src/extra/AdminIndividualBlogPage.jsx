// AdminIndividualBlogPage.jsx
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const AdminIndividualBlogPage = ({ blogs, onDelete }) => {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));
    const navigate = useNavigate(); // Initialize useNavigate
  
    const handleDelete = () => {
      onDelete(blog.id);
      navigate('/admin/blogs');
    };
  
    if (!blog) {
      return <div>Blog not found</div>;
    }
  
    return (
      <div className="container mt-5"> {/* Added margin top */}
        <div className="row">
          <div className="col-md-10 offset-md-1"> {/* Adjusted column size */}
            <div className="card">
              <img src={blog.image} className="card-img-top" alt={blog.title} style={{ objectFit: 'contain' }} /> {/* Changed style */}
              <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p className="card-text">Author: {blog.author}</p>
                <p className="card-text">Date: {blog.date}</p>
                <p className="card-text">{blog.content}</p>
                <div className="btn-group">
                  <Link to={`/admin/blogs/${blog.id}/edit`} className="btn btn-primary">Edit</Link>
                  <button onClick={handleDelete} className="btn btn-danger ml-2">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default AdminIndividualBlogPage;
