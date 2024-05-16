// Main Admin Page
import React from 'react';
import AdminAnalyticsPage from './AdminAnalyticsPage';
import analytic1 from './images/analytics1.png';
import analytic2 from './images/analytics2.png';
import analytic3 from './images/analytics3.png';

const MainAdminPage = () => {
  // Dummy data for analytics
  const analytics = [
    {
      image: analytic1,
      sales: 1000,
      profit: 500,
      reach: '10,000'
    },
    {
      image: analytic2,
      sales: 1500,
      profit: 700,
      reach: '15,000'
    },
    {
      image: analytic3,
      sales: 2000,
      profit: 1000,
      reach: '20,000'
    }
  ];

  return (
    <div>
      {/* Other content */}
      <AdminAnalyticsPage analytics={analytics} />
      {/* Other content */}
    </div>
  );
}

export default MainAdminPage;
