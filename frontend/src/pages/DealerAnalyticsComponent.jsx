// DealerAnalyticsComponent.js
import React from 'react';

const DealerAnalyticsComponent = ({ dealerAnalyticsData }) => {
  return (
    <div>
      <h2>Total Sales: {dealerAnalyticsData.totalSales}</h2>
      <p>Total Revenue: {dealerAnalyticsData.totalRevenue}</p>
      <p>Average Revenue Per Sale: {dealerAnalyticsData.averageRevenuePerSale}</p>
      <p>Top Selling Model: {dealerAnalyticsData.topSellingModel}</p>
      <p>Top Revenue Model: {dealerAnalyticsData.topRevenueModel}</p>
      <p>Top Selling Region: {dealerAnalyticsData.topSellingRegion}</p>
      <p>Top Revenue Region: {dealerAnalyticsData.topRevenueRegion}</p>
      {/* Add more analytics data as needed */}
    </div>
  );
}

export default DealerAnalyticsComponent;
