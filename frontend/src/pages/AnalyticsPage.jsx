import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const AnalyticsPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [chartData, setChartData] = useState({});

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

  useEffect(() => {
    if (vehicles.length > 0) {
      // Process data to count dealership key occurrences
      const dealershipCounts = vehicles.reduce((acc, vehicle) => {
        acc[vehicle.dealership] = (acc[vehicle.dealership] || 0) + 1;
        return acc;
      }, {});

      // Prepare data for chart
      const labels = Object.keys(dealershipCounts);
      const data = Object.values(dealershipCounts);

      setChartData({
        labels,
        datasets: [
          {
            label: "Vehicles sold by each dealership",
            data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
    }
  }, [vehicles]);

  return (
    <div>
      <h1>Vehicle Analytics {vehicles.length}</h1>
      {vehicles.length > 0 ? (
        <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AnalyticsPage;
