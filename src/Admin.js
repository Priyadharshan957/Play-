// src/components/Admin.js
import React, { useState } from 'react';
import Dashboard from './admin/Dashboard';
import EditTitle from './admin/EditTitle';
import Preview from './admin/Preview';
import Settings from './admin/Settings';
import './Admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'EditTitle':
        return <EditTitle />;
      case 'Preview':
        return <Preview />;
      case 'Settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="admin-container">
      <div className="sidebar">
        <ul>
          <li onClick={() => setActiveTab('Dashboard')} className={activeTab === 'Dashboard' ? 'active' : ''}>Dashboard</li>
          <li onClick={() => setActiveTab('EditTitle')} className={activeTab === 'EditTitle' ? 'active' : ''}>Edit Title</li>
          <li onClick={() => setActiveTab('Preview')} className={activeTab === 'Preview' ? 'active' : ''}>Preview</li>
          <li onClick={() => setActiveTab('Settings')} className={activeTab === 'Settings' ? 'active' : ''}>Settings</li>
        </ul>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Admin;