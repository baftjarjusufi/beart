import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Profile from './components/Profile';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Sidebar Navigation */}
        <div className="sidebar">
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
