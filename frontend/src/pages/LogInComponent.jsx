// src/pages/LogInComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setRole }) => {
  const navigator = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Reset error state before making request
    axios.post('http://localhost:3000/accounts/login', formData, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setRole(res.data.user.type); // Update role on login
        navigate('/');
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setError(error.response.data.message); // Set error message from response
        } else {
          setError('An unexpected error occurred. Please try again later.');
        }
        console.log(error.response.data);
      });
  };

  return (
    <form className="form w-100 m-auto p-5 bg-light" onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>} 
     <div className="form-floating m-1">
                <input type="email" className="form-control" id="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} aria-describedby="emailHelp" required />
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating m-1">
                <input type="password" className="form-control" id="password" placeholder="password" name="password" value={formData.password} onChange={handleChange} required />
                <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2">Login</button>
    </form>
  );
}

export default LoginForm;
