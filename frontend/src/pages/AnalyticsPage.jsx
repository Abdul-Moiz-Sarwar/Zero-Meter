import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const AnalyticsPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [chartDataSold, setChartDataSold] = useState({
    labels: [],
    datasets: [],
  });

  const [chartDataUnsold, setChartDataUnsold] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await axios.get('http://localhost:3000/vehicles/all', { withCredentials: true });
        
        setVehicles(res.data);
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
      }
    };

    fetchVehicles();
  }, []);

  const processVehicleData = (status) => {
    return vehicles.reduce((acc, vehicle) => {
      if (vehicle.status === status) {
        acc[vehicle.dealership] = (acc[vehicle.dealership] || 0) + 1;
      }
      return acc;
    }, {});
  };

  useEffect(() => {
    if (vehicles.length > 0) {
      // Process data for sold vehicles
      const soldCounts = processVehicleData('sold');
      const soldLabels = Object.keys(soldCounts);
      const soldData = Object.values(soldCounts);

      setChartDataSold({
        labels: soldLabels,
        datasets: [
          {
            label: "Vehicles sold by each dealership",
            data: soldData,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });

      // Process data for unsold vehicles
      const unsoldCounts = processVehicleData('unsold');
      const unsoldLabels = Object.keys(unsoldCounts);
      const unsoldData = Object.values(unsoldCounts);

      setChartDataUnsold({
        labels: unsoldLabels,
        datasets: [
          {
            label: "Unsold vehicles by each dealership",
            data: unsoldData,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      });
    }
  }, [vehicles]);

  return (
    <div>
      <h1>Vehicle Analytics</h1>
      {vehicles.length > 0 ? (
        <div>
          <div style={{ width: '100%', height: '400px' }}>
            <Bar 
              data={chartDataSold} 
              options={{ 
                responsive: true, 
                maintainAspectRatio: false 
              }} 
            />
          </div>
          <div style={{ width: '100%', height: '400px' }}>
            <br></br>
            <br></br>
            <Bar 
              data={chartDataUnsold} 
              options={{ 
                responsive: true, 
                maintainAspectRatio: false 
              }} 
            />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AnalyticsPage;
