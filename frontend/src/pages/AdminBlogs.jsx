// AdminBlogs.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminBlogComponent from './AdminBlogComponent'; 

const AdminBlogs = ({ blogs, onDelete, onSave }) => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        date: '',
        summary: '',
        content: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        setFormData({
            title: '',
            author: '',
            date: '',
            summary: '',
            content: ''
        });
        setShowAddForm(false);
        setSuccessMessage('Successfully added the blog');
        // Clear success message after 3 seconds
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {blogs.map(blog => (
                    <div key={blog.id} className="col-md-6 mb-4">
                        <AdminBlogComponent blog={blog} onDelete={onDelete} />
                        <Link to={`/admin/blogs/${blog.id}`} className="btn btn-primary mt-2">View Details</Link>
                    </div>
                ))}
            </div>
            <button className="btn btn-primary" onClick={() => setShowAddForm(true)}>Add Blog</button>
            {/* Add Blog Form */}
            {showAddForm && (
                <div className="card mt-3">
                    <div className="card-header">Add Blog</div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Author</label>
                                <input type="text" className="form-control" name="author" value={formData.author} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input type="text" className="form-control" name="date" value={formData.date} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Summary</label>
                                <input type="text" className="form-control" name="summary" value={formData.summary} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Content</label>
                                <textarea className="form-control" name="content" value={formData.content} onChange={handleChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            )}
            {successMessage && (
                <div className="alert alert-success mt-3">{successMessage}</div>
            )}
        </div>
    );
}

export default AdminBlogs;
