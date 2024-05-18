import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div className='m-5'>
      <h2>Vehicle Details</h2>
      <div className="card m-5">
        <img src={vehicle.image} className="card-img-top" alt="..."/>
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
          {role === 'dealer' && (
            <>
                <button className="btn btn-danger me-2" onClick={handleDeleteVehicle}>Delete</button>
                <button className="btn btn-primary me-2" onClick={handleDeleteVehicle}>Edit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default VehicleDetails;
