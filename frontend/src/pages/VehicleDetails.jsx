import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VehicleDetails = ({ role }) => {

  const navigate = useNavigate();
  const {id} = useParams();
  const [vehicle, setVehicle] = useState({});
  
  useEffect(() =>{
    const fetchVehicle = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/vehicles/${id}`, { withCredentials: true });
        setVehicle(res.data);
      } catch (error) {
        console.error('Error fetching vehicles data:', error);
      }
    };
    fetchVehicle()
  },[id]);

  const handleDeleteVehicle = async () => {
    try {
        const res = await axios.delete(`http://localhost:3000/vehicles/${id}`, { withCredentials: true });
        navigate('/vehicles')
      } catch (error) {
        console.error('Error deleting vehicles data:', error);
      }
  };

  if (!vehicle) {
    return <div>Vehicle not found</div>;
  }

  return (
    <div className='p-5 bg-light'>
      <h2>Vehicle Details</h2>
      <div className="card m-5">
        <div className="card-body">
          <h5 className="card-title">{vehicle.company} {vehicle.model} {vehicle.varient}</h5>
          <p className="card-text">Company : {vehicle.company}</p>
          <p className="card-text">Model : {vehicle.model}</p>
          <p className="card-text">Varient : {vehicle.varient}</p>
          <p className="card-text">Model Year : {vehicle.year}</p>
          <p className="card-text">Color : {vehicle.color}</p>
          <p className="card-text">Power : {vehicle.power}</p>
          <p className="card-text">Bought Price : {vehicle.buyprice}</p>
          <p className="card-text">Status : {vehicle.status}</p>
          <p className="card-text">Mileage : {vehicle.mileage}</p>
          <p className="card-text">Transmission : {vehicle.transmission}</p>
          <p className="card-text">Test Drive : {vehicle.testdrive ? 'Available' : 'Not Available'}</p>
          {role === 'dealer' && (
            <div className='d-flex flex-row'>
                <button className="btn btn-danger w-50 m-3" onClick={handleDeleteVehicle}>Delete</button>
                <Link to={`/vehicles/edit/${vehicle._id}`} className="btn btn-primary w-50 m-3">Edit</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VehicleDetails;
