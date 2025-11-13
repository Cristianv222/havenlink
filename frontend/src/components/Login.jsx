import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Usuario o contraseña incorrectos');
      console.error('Error de login:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        {/* Left Side - Illustration */}
        <div className="login-illustration">
          <div className="illustration-content">
            <svg className="person-illustration" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              {/* Monitor/Screen */}
              <rect x="80" y="150" width="120" height="140" fill="#3a3a4a" rx="4"/>
              <rect x="90" y="160" width="100" height="100" fill="#2a2a3a" rx="2"/>
              
              {/* Monitor Stand */}
              <rect x="130" y="290" width="20" height="30" fill="#3a3a4a"/>
              <rect x="110" y="320" width="60" height="8" fill="#3a3a4a" rx="4"/>
              
              {/* Floating Documents */}
              <g className="floating-doc" style={{transformOrigin: 'center'}}>
                <rect x="200" y="100" width="60" height="40" fill="white" rx="3" opacity="0.9"/>
                <line x1="210" y1="115" x2="250" y2="115" stroke="#4a4aff" strokeWidth="2"/>
                <line x1="210" y1="125" x2="245" y2="125" stroke="#4a4aff" strokeWidth="2"/>
              </g>
              
              <g className="floating-doc-2" style={{transformOrigin: 'center'}}>
                <rect x="200" y="180" width="60" height="40" fill="white" rx="3" opacity="0.9"/>
                <line x1="210" y1="195" x2="250" y2="195" stroke="#4a4aff" strokeWidth="2"/>
                <line x1="210" y1="205" x2="245" y2="205" stroke="#4a4aff" strokeWidth="2"/>
              </g>
              
              {/* Person - Body */}
              <ellipse cx="290" cy="180" rx="25" ry="30" fill="#e0e0e0"/>
              <rect x="265" y="180" width="50" height="80" fill="#e0e0e0" rx="5"/>
              
              {/* Person - Head */}
              <circle cx="290" cy="150" r="22" fill="#d4a574"/>
              
              {/* Person - Hair */}
              <path d="M 270 145 Q 275 130 290 128 Q 305 130 310 145 Q 310 155 305 160 L 275 160 Q 270 155 270 145" fill="#2a2a2a"/>
              <ellipse cx="295" cy="155" rx="18" ry="25" fill="#2a2a2a"/>
              
              {/* Person - Arms */}
              <rect x="250" y="200" width="15" height="50" fill="#d4a574" rx="7" transform="rotate(-30 257 200)"/>
              <rect x="315" y="200" width="15" height="50" fill="#d4a574" rx="7" transform="rotate(30 322 200)"/>
              
              {/* Person - Hands */}
              <circle cx="245" cy="230" r="8" fill="#d4a574"/>
              <circle cx="335" cy="230" r="8" fill="#d4a574"/>
              
              {/* Person - Legs */}
              <rect x="270" y="260" width="15" height="60" fill="#2a2a2a" rx="7"/>
              <rect x="295" y="260" width="15" height="60" fill="#2a2a2a" rx="7"/>
              
              {/* Person - Shoes */}
              <ellipse cx="277" cy="320" rx="12" ry="8" fill="#8b4513"/>
              <ellipse cx="302" cy="320" rx="12" ry="8" fill="#8b4513"/>
              
              {/* Document in hand */}
              <rect x="325" y="220" width="30" height="40" fill="#4a4aff" rx="2"/>
              <line x1="330" y1="230" x2="350" y2="230" stroke="white" strokeWidth="1.5"/>
              <line x1="330" y1="238" x2="350" y2="238" stroke="white" strokeWidth="1.5"/>
              <line x1="330" y1="246" x2="345" y2="246" stroke="white" strokeWidth="1.5"/>
              
              {/* Decorative plant */}
              <rect x="50" y="310" width="15" height="30" fill="#8b7355" rx="2"/>
              <ellipse cx="57" cy="300" rx="20" ry="25" fill="#90c695" opacity="0.7"/>
              <ellipse cx="50" cy="295" rx="15" ry="20" fill="#90c695" opacity="0.8"/>
              <ellipse cx="64" cy="295" rx="15" ry="20" fill="#90c695" opacity="0.8"/>
            </svg>
            
            {/* Decorative waves */}
            <svg className="wave-decoration" viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,50 Q125,20 250,50 T500,50 L500,100 L0,100 Z" fill="rgba(100, 181, 246, 0.2)"/>
            </svg>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="login-form-container">
          <div className="login-form">
            <div className="form-header">
              <div className="lock-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="11" width="14" height="10" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="16" r="1.5" fill="white"/>
                </svg>
              </div>
              <h1>Sign In</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username *</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter your username"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="form-input"
                />
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot password?
                </Link>
              </div>

              {error && <div className="error-message">{error}</div>}

              <button
                type="submit"
                disabled={loading}
                className="submit-button"
              >
                {loading ? 'SIGNING IN...' : 'SIGN IN'}
              </button>

              <div className="register-link">
                Not registered yet? <Link to="/register">Create an Account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;