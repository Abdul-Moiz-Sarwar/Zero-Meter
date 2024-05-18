import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const VehicleAFormComponent = ({ role }) => {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the vehicle ID from the URL
    const [formData, setFormData] = useState({
        testdrive: false,
        status: 'unsold',
        datesold: null,
        buyprice: '',
        sellprice: null,
        company: '',
        model: '',
        varient: '',
        year: '',
        power: '',
        color: '',
        mileage: '',
        transmission: 'automatic',
        type: 'car',
    });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditMode(true);
            axios.get(`http://localhost:3000/vehicles/${id}`, { withCredentials: true })
                .then(response => {
                    setFormData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching vehicle data:', error);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            axios.put(`http://localhost:3000/vehicles/${id}`, formData, { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                    navigate('/vehicles');
                })
                .catch(err => {
                    console.error('Error updating vehicle:', err.response.data);
                });
        } else {
            axios.post('http://localhost:3000/vehicles', formData, { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                    navigate('/vehicles');
                })
                .catch(err => {
                    console.error('Error adding vehicle:', err.response.data);
                });
        }
    };

    return (
        <form className="form w-100 m-auto p-5 bg-light" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">{isEditMode ? 'Edit Vehicle' : 'Add New Vehicle'}</h1>

            <div className="form-floating m-1">
                <input type="text" className="form-control" id="company" placeholder="company" name="company" value={formData.company} onChange={handleChange} required />
                <label htmlFor="company">Company</label>
            </div>
            <div className="form-floating m-1">
                <input type="text" className="form-control" id="model" placeholder="model" name="model" value={formData.model} onChange={handleChange} required />
                <label htmlFor="model">Model</label>
            </div>
            <div className="form-floating m-1">
                <input type="text" className="form-control" id="varient" placeholder="varient" name="varient" value={formData.varient} onChange={handleChange} required />
                <label htmlFor="varient">Varient</label>
            </div>
            <div className="form-floating m-1">
                <input type="text" className="form-control" id="color" placeholder="color" name="color" value={formData.color} onChange={handleChange} required />
                <label htmlFor="color">Color</label>
            </div>
            <div className="form-floating m-1">
                <input type="text" className="form-control" id="power" placeholder="power" name="power" value={formData.power} onChange={handleChange} required />
                <label htmlFor="power">Power</label>
            </div>
            <div className="form-floating m-1">
                <input type="number" className="form-control" id="mileage" placeholder="mileage" name="mileage" value={formData.mileage} onChange={handleChange} required />
                <label htmlFor="mileage">Mileage</label>
            </div>
            <div className="form-floating m-1">
                <input type="text" className="form-control" id="year" placeholder="year" name="year" value={formData.year} onChange={handleChange} required />
                <label htmlFor="year">Model Year</label>
            </div>
            <div className="form-floating m-1">
                <input type="number" className="form-control" id="buyprice" placeholder="buyprice" name="buyprice" value={formData.buyprice} onChange={handleChange} required />
                <label htmlFor="buyprice">Bought Price</label>
            </div>
            <div className="form-floating m-1">
                <select className="form-select" id="transmission" name="transmission" placeholder="transmission" value={formData.transmission} onChange={handleChange} required>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                </select>
                <label htmlFor="transmission">Transmission</label>
            </div>
            <div className="form-floating m-1">
                <select className="form-select" id="type" name="type" placeholder="type" value={formData.type} onChange={handleChange} required>
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>
                </select>
                <label htmlFor="type">Type</label>
            </div>
            <div className="form-check text-start m-3">
                <input className="form-check-input" type="checkbox" id="testdrive" name="testdrive" checked={formData.testdrive} onChange={handleChange} />
                <label className="form-check-label" htmlFor="testdrive"> Test Drive </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">{isEditMode ? 'Update Vehicle' : 'Add Vehicle'}</button>
        </form>
    );
};

export default VehicleAFormComponent;
