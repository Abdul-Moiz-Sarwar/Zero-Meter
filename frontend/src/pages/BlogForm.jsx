import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogFormComponent = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        datecreated: ''
    });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditMode(true);
            axios.get(`http://localhost:3000/blogs/${id}`, { withCredentials: true })
                .then(response => {
                    setFormData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching blog data:', error);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            axios.put(`http://localhost:3000/blogs/${id}`, formData, { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                    navigate('/blogs');
                })
                .catch(err => {
                    console.error('Error updating blog:', err.response.data);
                });
        } else {
            axios.post('http://localhost:3000/blogs/', formData, { withCredentials: true })
            .then(res => {
                    console.log(res.data);
                    navigate('/blogs');
                })
                .catch(err => {
                    console.error('Error adding blog:', err.response.data);
                });
        }
    };

    return (
        <form className="form w-100 m-auto p-5 bg-light" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">{isEditMode ? 'Edit Blog' : 'Add New Blog'}</h1>

            <div className="form-floating m-1">
                <input type="text" className="form-control" id="title" placeholder="Title" name="title" value={formData.title} onChange={handleChange} required />
                <label htmlFor="title">Title</label>
            </div>
            <div className="form-floating m-1">
                <textarea className="form-control" id="content" placeholder="Content" name="content" value={formData.content} onChange={handleChange} required />
                <label htmlFor="content">Content</label>
            </div>
            <div className="form-floating m-1">
                <input type="text" className="form-control" id="author" placeholder="Author" name="author" value={formData.author} onChange={handleChange} required />
                <label htmlFor="author">Author</label>
            </div>
            <div className="form-floating m-1">
                <input type="date" className="form-control" id="datecreated" placeholder="Date Created" name="datecreated" value={formData.datecreated.split('T')[0]} onChange={handleChange} required />
                <label htmlFor="datecreated">Date Created</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">{isEditMode ? 'Update Blog' : 'Add Blog'}</button>
        </form>
    );
};

export default BlogFormComponent;
