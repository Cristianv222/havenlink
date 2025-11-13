import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Datos de ejemplo para las tarjetas
  const stats = [
    {
      id: 1,
      title: 'Total Reservations',
      value: '245',
      change: '+12%',
      icon: '📅',
      color: '#4a4aff'
    },
    {
      id: 2,
      title: 'Active Guests',
      value: '87',
      change: '+5%',
      icon: '👥',
      color: '#ff9800'
    },
    {
      id: 3,
      title: 'Available Rooms',
      value: '32',
      change: '-3%',
      icon: '🏨',
      color: '#4caf50'
    },
    {
      id: 4,
      title: 'Revenue',
      value: '$45.2K',
      change: '+18%',
      icon: '💰',
      color: '#e91e63'
    }
  ];

  const recentActivities = [
    { id: 1, action: 'New reservation', user: 'John Doe', time: '5 min ago', type: 'success' },
    { id: 2, action: 'Check-out completed', user: 'Jane Smith', time: '15 min ago', type: 'info' },
    { id: 3, action: 'Room service request', user: 'Mike Johnson', time: '30 min ago', type: 'warning' },
    { id: 4, action: 'Payment received', user: 'Sarah Williams', time: '1 hour ago', type: 'success' },
    { id: 5, action: 'Maintenance scheduled', user: 'Room 305', time: '2 hours ago', type: 'info' }
  ];

  const quickActions = [
    { id: 1, title: 'New Reservation', icon: '➕', color: '#4a4aff' },
    { id: 2, title: 'Check In', icon: '🔑', color: '#4caf50' },
    { id: 3, title: 'Check Out', icon: '🚪', color: '#ff9800' },
    { id: 4, title: 'Room Status', icon: '🛏️', color: '#9c27b0' },
    { id: 5, title: 'Reports', icon: '📊', color: '#00bcd4' },
    { id: 6, title: 'Settings', icon: '⚙️', color: '#607d8b' }
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="dashboard-title">HavenLink Dashboard</h1>
            <p className="dashboard-subtitle">Welcome back, {user?.username || 'User'}!</p>
          </div>
          <div className="header-right">
            <div className="user-info">
              <div className="user-avatar">
                <span>{user?.username?.charAt(0).toUpperCase() || 'U'}</span>
              </div>
              <div className="user-details">
                <p className="user-name">{user?.username || 'Usuario'}</p>
                <p className="user-email">{user?.email || 'email@example.com'}</p>
              </div>
            </div>
            <button onClick={handleLogout} className="logout-button">
              <span className="logout-icon">🚪</span>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Stats Cards */}
        <section className="stats-section">
          <h2 className="section-title">Overview</h2>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                  <span>{stat.icon}</span>
                </div>
                <div className="stat-content">
                  <p className="stat-title">{stat.title}</p>
                  <div className="stat-value-row">
                    <h3 className="stat-value">{stat.value}</h3>
                    <span className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="quick-actions-section">
          <h2 className="section-title">Quick Actions</h2>
          <div className="quick-actions-grid">
            {quickActions.map((action) => (
              <button key={action.id} className="quick-action-card">
                <div className="action-icon" style={{ backgroundColor: `${action.color}20`, color: action.color }}>
                  <span>{action.icon}</span>
                </div>
                <p className="action-title">{action.title}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Recent Activities */}
        <section className="activities-section">
          <h2 className="section-title">Recent Activities</h2>
          <div className="activities-card">
            <div className="activities-list">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className={`activity-indicator ${activity.type}`}></div>
                  <div className="activity-content">
                    <p className="activity-action">{activity.action}</p>
                    <p className="activity-user">{activity.user}</p>
                  </div>
                  <span className="activity-time">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Status */}
        <section className="status-section">
          <h2 className="section-title">System Status</h2>
          <div className="status-card">
            <div className="status-item">
              <div className="status-icon success">
                <span>✓</span>
              </div>
              <div className="status-info">
                <p className="status-label">System Status</p>
                <p className="status-value">All systems operational</p>
              </div>
            </div>
            <div className="status-item">
              <div className="status-icon success">
                <span>✓</span>
              </div>
              <div className="status-info">
                <p className="status-label">Database</p>
                <p className="status-value">Connected</p>
              </div>
            </div>
            <div className="status-item">
              <div className="status-icon success">
                <span>✓</span>
              </div>
              <div className="status-info">
                <p className="status-label">API Services</p>
                <p className="status-value">Running smoothly</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;