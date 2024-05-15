// ViewDealerAnalyticsPage.js
import React from 'react';
import DealerAnalyticsComponent from './DealerAnalyticsComponent';

const ViewDealerAnalyticsPage = () => {
  // Dummy data for dealer analytics
  const dealerAnalyticsData = {
    totalSales: 100,
    totalRevenue: '$100,000',
    averageRevenuePerSale: '$1,000',
    topSellingModel: 'Model X',
    topRevenueModel: 'Model Y',
    topSellingRegion: 'Region A',
    topRevenueRegion: 'Region B'
  };

  return (
    <div>
    <h1 className="text-center">Dealer Analytics</h1>
      <DealerAnalyticsComponent dealerAnalyticsData={dealerAnalyticsData} />
    </div>
  );
}

export default ViewDealerAnalyticsPage;
