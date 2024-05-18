import React from 'react';

const AnalyticsPage = ({ analytics }) => {
  return (
    <div className="container">
      <h1 className="text-center">Dealer Analytics</h1>
      <div className="row">
        {analytics.map((analytic, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
              <img src={analytic.image} className="card-img-top" alt={`Analytic ${index + 1}`} style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Analytic {index + 1}</h5>
                <p className="card-text">Sales this Month: {analytic.sales}</p>
                <p className="card-text">Profit this Month: {analytic.profit}</p>
                <p className="card-text">Reach this Month: {analytic.reach}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnalyticsPage;
