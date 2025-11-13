import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const ModernDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Menu items
  const menuItems = [
    { id: 1, icon: '📊', label: 'Dashboard', active: true },
    { id: 2, icon: '👤', label: 'Layout', active: false },
    { id: 3, icon: '🎨', label: 'Visitor Kit', active: false },
    { id: 4, icon: '📄', label: 'Pages', active: false },
    { id: 5, icon: '🛒', label: 'eCommerce', active: false },
    { id: 6, icon: '📧', label: 'Admin Reports', active: false },
    { id: 7, icon: '✉️', label: 'Mail', active: false },
    { id: 8, icon: '📱', label: 'Apps', active: false },
    { id: 9, icon: '📅', label: 'Calendar', active: false },
    { id: 10, icon: '💬', label: 'Chat', active: false },
    { id: 11, icon: '📞', label: 'Contact', active: false },
    { id: 12, icon: '🔔', label: 'Elements', active: false },
    { id: 13, icon: '📝', label: 'Forms', active: false },
    { id: 14, icon: '🗂️', label: 'Invoice', active: false },
    { id: 15, icon: '📑', label: 'Blank Pages', active: false },
    { id: 16, icon: '🔐', label: 'Sign In & Sign Up', active: false },
    { id: 17, icon: '👨', label: 'Profile', active: false }
  ];

  const earlyMembers = [
    { id: 1, name: 'Adrianna Quinn', email: 'adrianna@email.com', avatar: '👩‍💼' },
    { id: 2, name: 'Mary Lante', email: 'mary@email.com', avatar: '👩' },
    { id: 3, name: 'Robert Fox', email: 'robert@email.com', avatar: '👨' },
    { id: 4, name: 'Courtney Henry', email: 'courtney@email.com', avatar: '👨‍💼' }
  ];

  const salesData = [
    { month: 'January', sales1: 300, sales2: 200 },
    { month: 'February', sales1: 450, sales2: 280 },
    { month: 'March', sales1: 380, sales2: 350 },
    { month: 'April', sales1: 520, sales2: 400 },
    { month: 'May', sales1: 480, sales2: 420 },
    { month: 'June', sales1: 600, sales2: 480 }
  ];

  return (
    <div className="modern-dashboard">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">🏢</span>
            <span className="logo-text">QUILLpay</span>
          </div>
        </div>

        <div className="sidebar-section">
          <p className="section-title">GENERAL</p>
          <nav className="sidebar-nav">
            {menuItems.slice(0, 5).map(item => (
              <a key={item.id} href="#" className={`nav-item ${item.active ? 'active' : ''}`}>
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="sidebar-section">
          <p className="section-title">COMPONENTS</p>
          <nav className="sidebar-nav">
            {menuItems.slice(5, 12).map(item => (
              <a key={item.id} href="#" className={`nav-item ${item.active ? 'active' : ''}`}>
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="sidebar-section">
          <p className="section-title">EXTRA PAGES</p>
          <nav className="sidebar-nav">
            {menuItems.slice(12).map(item => (
              <a key={item.id} href="#" className={`nav-item ${item.active ? 'active' : ''}`}>
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Bar */}
        <header className="topbar">
          <div className="topbar-left">
            <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </button>
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="topbar-right">
            <button className="icon-button">
              <span className="badge">5</span>
              🔔
            </button>
            <button className="icon-button">
              <span className="badge">3</span>
              ✉️
            </button>
            <div className="user-menu">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%234a4aff'/%3E%3Ctext x='20' y='27' font-size='18' fill='white' text-anchor='middle' font-family='Arial'%3E{user?.username?.charAt(0).toUpperCase() || 'U'}%3C/text%3E%3C/svg%3E" alt="User" className="user-avatar" />
              <div className="user-info">
                <span className="user-name">{user?.username || 'Usuario'}</span>
                <button onClick={handleLogout} className="logout-link">Logout</button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <div className="page-header">
            <h1>Dashboard</h1>
            <p className="breadcrumb">Home / Dashboard</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card cyan">
              <div className="stat-icon">👤</div>
              <div className="stat-info">
                <h3>1,559</h3>
                <p>Total Users</p>
              </div>
            </div>

            <div className="stat-card gray">
              <div className="stat-icon">🏷️</div>
              <div className="stat-info">
                <h3>$7,459.90</h3>
                <p>Total Sales</p>
              </div>
            </div>

            <div className="stat-card cyan">
              <div className="stat-icon">📋</div>
              <div className="stat-info">
                <h3>26</h3>
                <p>Open Projects</p>
              </div>
            </div>

            <div className="stat-card gray">
              <div className="stat-icon">⚙️</div>
              <div className="stat-info">
                <h3>476</h3>
                <p>New Products</p>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="charts-row">
            {/* Sales Overview Chart */}
            <div className="chart-card large">
              <div className="card-header">
                <h3>SALES OVERVIEW</h3>
                <button className="export-btn">📤</button>
              </div>
              <div className="chart-container">
                <div className="chart-legend">
                  <span className="legend-item">
                    <span className="legend-color cyan"></span>
                    Sales 1
                  </span>
                  <span className="legend-item">
                    <span className="legend-color green"></span>
                    Sales 2
                  </span>
                </div>
                <svg className="line-chart" viewBox="0 0 600 250">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#00bcd4', stopOpacity: 0.3}} />
                      <stop offset="100%" style={{stopColor: '#00bcd4', stopOpacity: 0}} />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4, 5].map(i => (
                    <line key={i} x1="50" y1={50 + i * 40} x2="580" y2={50 + i * 40} stroke="#e0e0e0" strokeWidth="1" />
                  ))}
                  
                  {/* Sales 1 Line */}
                  <polyline
                    points="80,180 180,120 280,140 380,80 480,100 580,60"
                    fill="none"
                    stroke="#00bcd4"
                    strokeWidth="3"
                  />
                  
                  {/* Sales 2 Line */}
                  <polyline
                    points="80,200 180,160 280,150 380,120 480,110 580,100"
                    fill="none"
                    stroke="#4caf50"
                    strokeWidth="3"
                  />
                  
                  {/* Points */}
                  {[80, 180, 280, 380, 480, 580].map((x, i) => (
                    <circle key={`p1-${i}`} cx={x} cy={[180,120,140,80,100,60][i]} r="5" fill="#00bcd4" />
                  ))}
                  {[80, 180, 280, 380, 480, 580].map((x, i) => (
                    <circle key={`p2-${i}`} cx={x} cy={[200,160,150,120,110,100][i]} r="5" fill="#4caf50" />
                  ))}
                  
                  {/* X-axis labels */}
                  <text x="80" y="235" fontSize="12" textAnchor="middle" fill="#666">January</text>
                  <text x="180" y="235" fontSize="12" textAnchor="middle" fill="#666">March</text>
                  <text x="280" y="235" fontSize="12" textAnchor="middle" fill="#666">May</text>
                  <text x="380" y="235" fontSize="12" textAnchor="middle" fill="#666">September</text>
                  <text x="480" y="235" fontSize="12" textAnchor="middle" fill="#666">November</text>
                  <text x="580" y="235" fontSize="12" textAnchor="middle" fill="#666">December</text>
                </svg>
              </div>
            </div>

            {/* Traffic Sources Donut */}
            <div className="chart-card small">
              <div className="card-header">
                <h3>TRAFFIC SOURCES</h3>
                <button className="export-btn">📤</button>
              </div>
              <div className="donut-container">
                <svg className="donut-chart" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#e91e63" strokeWidth="35" strokeDasharray="110 330" transform="rotate(-90 100 100)" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#2196f3" strokeWidth="35" strokeDasharray="88 330" strokeDashoffset="-110" transform="rotate(-90 100 100)" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#ffc107" strokeWidth="35" strokeDasharray="66 330" strokeDashoffset="-198" transform="rotate(-90 100 100)" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#9e9e9e" strokeWidth="35" strokeDasharray="66 330" strokeDashoffset="-264" transform="rotate(-90 100 100)" />
                  <text x="100" y="95" fontSize="16" textAnchor="middle" fill="#666" fontWeight="600">Total</text>
                  <text x="100" y="115" fontSize="24" textAnchor="middle" fill="#333" fontWeight="700">14K</text>
                </svg>
                <div className="donut-legend">
                  <div className="legend-row">
                    <span className="legend-dot" style={{backgroundColor: '#e91e63'}}></span>
                    <span>Direct: 5K</span>
                  </div>
                  <div className="legend-row">
                    <span className="legend-dot" style={{backgroundColor: '#2196f3'}}></span>
                    <span>Search: 4K</span>
                  </div>
                  <div className="legend-row">
                    <span className="legend-dot" style={{backgroundColor: '#ffc107'}}></span>
                    <span>Social: 3K</span>
                  </div>
                  <div className="legend-row">
                    <span className="legend-dot" style={{backgroundColor: '#9e9e9e'}}></span>
                    <span>Other: 2K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="bottom-row">
            {/* Early Members */}
            <div className="members-card">
              <div className="card-header">
                <h3>EARLY MEMBERS</h3>
              </div>
              <div className="members-list">
                {earlyMembers.map(member => (
                  <div key={member.id} className="member-item">
                    <div className="member-avatar">{member.avatar}</div>
                    <div className="member-info">
                      <p className="member-name">{member.name}</p>
                      <p className="member-email">{member.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Location Map */}
            <div className="map-card">
              <div className="card-header">
                <h3>CUSTOMER LOCATION</h3>
              </div>
              <div className="map-container">
                <svg viewBox="0 0 400 250" className="map-svg">
                  {/* Simple US Map representation */}
                  <rect x="0" y="0" width="400" height="250" fill="#e3f2fd" />
                  
                  {/* States (simplified) */}
                  <path d="M 50,80 L 100,70 L 150,80 L 140,130 L 90,140 Z" fill="#00bcd4" opacity="0.8" />
                  <path d="M 160,100 L 220,95 L 240,130 L 200,150 Z" fill="#00bcd4" opacity="0.6" />
                  <path d="M 250,140 L 310,135 L 320,180 L 270,190 Z" fill="#00bcd4" opacity="0.7" />
                  
                  {/* Markers */}
                  <circle cx="120" cy="110" r="8" fill="#2196f3" />
                  <circle cx="200" cy="120" r="8" fill="#2196f3" />
                  <circle cx="280" cy="165" r="8" fill="#2196f3" />
                  
                  {/* Pin icons */}
                  <text x="120" y="115" fontSize="10" textAnchor="middle" fill="white">📍</text>
                  <text x="200" y="125" fontSize="10" textAnchor="middle" fill="white">📍</text>
                  <text x="280" y="170" fontSize="10" textAnchor="middle" fill="white">📍</text>
                </svg>
              </div>
            </div>

            {/* Database Card */}
            <div className="database-card">
              <div className="database-icon">
                <svg viewBox="0 0 120 120" className="db-illustration">
                  {/* Database icon */}
                  <ellipse cx="60" cy="30" rx="40" ry="12" fill="#00bcd4" />
                  <rect x="20" y="30" width="80" height="40" fill="#00bcd4" />
                  <ellipse cx="60" cy="70" rx="40" ry="12" fill="#0097a7" />
                  <ellipse cx="60" cy="50" rx="40" ry="12" fill="#00acc1" />
                </svg>
              </div>
              <h4>Database</h4>
              <p className="db-size">256 GB</p>
              
              {/* Bar chart */}
              <div className="bar-chart">
                {[60, 80, 45, 90, 70, 55, 85, 65, 75, 95, 50, 80].map((height, i) => (
                  <div key={i} className="bar" style={{height: `${height}%`}}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernDashboard;