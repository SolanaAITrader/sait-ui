import React, { useState, useEffect } from 'react';

const Dashboard: React.FC = () => {
  const [marketData, setMarketData] = useState<any>(null);

  // Simulate fetching market data
  useEffect(() => {
    const fetchData = async () => {
      // Replace with actual API call
      const data = await new Promise((resolve) =>
        setTimeout(() => resolve({ price: 100, trend: 'up' }), 1000)
      );
      setMarketData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {marketData ? (
        <div>
          <p>Current Price: {marketData.price}</p>
          <p>Trend: {marketData.trend}</p>
        </div>
      ) : (
        <p>Loading market data...</p>
      )}
    </div>
  );
};

export default Dashboard;
