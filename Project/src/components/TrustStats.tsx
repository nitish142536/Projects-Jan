import React from 'react';
import '../index.css'; // import global CSS

const stats = [
  { text: '500+ Kitchens' },
  { text: 'Same Day Delivery' },
  { text: 'Best Prices' },
  { text: 'Quality Checked' },
];

const TrustStats = () => {
  return (
    <div className="trust-stats">
      {stats.map((stat, index) => (
        <div key={index} className="trust-stat-item">
          <p className="trust-stat-text">{stat.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustStats;
