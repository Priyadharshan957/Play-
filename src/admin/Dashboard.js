// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="stats">
        <div className="stat-item">
          <h3>Total Movies</h3>
          <p>150</p>
        </div>
        <div className="stat-item">
          <h3>New Releases</h3>
          <p>5</p>
        </div>
        <div className="stat-item">
          <h3>Users</h3>
          <p>1,234</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
