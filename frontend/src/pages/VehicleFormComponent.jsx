import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VehicleFormComponent = ({ onSubmit, vehicle }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(vehicle || {
        title: '',
        image: '',
        price: '',
        specifications: {
            type: '',
            company: '',
            model: '',
            variant: '',
            modelYear: '',
            engineSize: '',
            horsePower: '',
            color: '',
            mileage: '',
            transmission: '',
            topSpeed: '',
            rating: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        navigate('/vehicles');
        alert("Successfully updated!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <div>
                <label>Image:</label>
                <input type="text" name="image" value={formData.image} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <div>
                <label>Price:</label>
                <input type="text" name="price" value={formData.price} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <div>
                <label>Type:</label>
                <input type="text" name="type" value={formData.specifications.type} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <div>
                <label>Company:</label>
                <input type="text" name="company" value={formData.specifications.company} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <div>
                <label>Model:</label>
                <input type="text" name="model" value={formData.specifications.model} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <div>
                <label>Variant:</label>
                <input type="text" name="variant" value={formData.specifications.variant} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <div>
                <label>Model Year:</label>
                <input type="text" name="modelYear" value={formData.specifications.modelYear} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <div>
                <label>Engine Size:</label>
                <input type="text" name="engineSize" value={formData.specifications.engineSize} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <div>
                <label>Horse Power:</label>
                <input type="text" name="horsePower" value={formData.specifications.horsePower} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <div>
                <label>Color:</label>
                <input type="text" name="color" value={formData.specifications.color} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <div>
                <label>Mileage:</label>
                <input type="text" name="mileage" value={formData.specifications.mileage} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <div>
                <label>Transmission:</label>
                <input type="text" name="transmission" value={formData.specifications.transmission} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <div>
                <label>Top Speed:</label>
                <input type="text" name="topSpeed" value={formData.specifications.topSpeed} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <div>
                <label>Rating:</label>
                <input type="text" name="rating" value={formData.specifications.rating} onChange={handleChange} style={{ width: '300px' }}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default VehicleFormComponent;
