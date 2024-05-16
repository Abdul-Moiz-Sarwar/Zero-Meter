import React from 'react';
import { useParams } from 'react-router-dom';
import VehicleDetailComponent from './VehicleDetailComponent';

const VehicleDetails = ({ vehicles }) => {
  const { id } = useParams();
  const vehicle = vehicles.find(vehicle => vehicle.id === parseInt(id));

  if (!vehicle) {
    return <div>Vehicle not found</div>;
  }

  return (
    <div>
      <h2>Details and More!</h2>

      <VehicleDetailComponent vehicle={vehicle} />
    </div>
  );
}

export default VehicleDetails;
