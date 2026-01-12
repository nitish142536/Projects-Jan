import React from 'react';
import '../../index.css';
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section */}
        <div className="login-info">
          <h2>Welcome Back to AgroCart 🌱</h2>
          <p>
            Log in to manage orders, access wholesale prices, and get fresh
            supplies delivered on time.
          </p>

          <ul>
            <li>✔ Trusted by 500+ Kitchens</li>
            <li>✔ Same Day Delivery</li>
            <li>✔ Quality Checked Products</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="login-card">
          <h3>Login</h3>
          <p className="login-subtitle">
            Enter your credentials to continue
          </p>

          <form className="login-form">
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@restaurant.com" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button className="login-btn">Login</button>
          </form>

          <p className="signup-text">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
