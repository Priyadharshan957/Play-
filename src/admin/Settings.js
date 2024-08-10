// src/components/Settings.js
import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    platformName: '',
    theme: 'light',
    notificationPreference: 'all'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prevSettings => ({ ...prevSettings, [name]: value }));
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    // Here you can add functionality to save the settings
    // For example, sending them to a backend server or saving to localStorage
    alert('Settings have been saved!');
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-form">
        <div className="form-item">
          <label>Platform Name</label>
          <input
            type="text"
            name="platformName"
            placeholder="Enter Platform Name"
            value={settings.platformName}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label>Theme</label>
          <select name="theme" value={settings.theme} onChange={handleChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="form-item">
          <label>Notification Preferences</label>
          <select
            name="notificationPreference"
            value={settings.notificationPreference}
            onChange={handleChange}
          >
            <option value="all">All</option>
            <option value="important">Important Only</option>
            <option value="none">None</option>
          </select>
        </div>
        <button onClick={handleSave}>Save Settings</button>
      </div>
    </div>
  );
};

export default Settings;
