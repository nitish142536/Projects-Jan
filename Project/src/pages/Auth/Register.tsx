import React from "react";
import '../../index.css';

const Register: React.FC = () => {
  return (
    <div className="register-page">
      <div className="register-container">

        {/* Left Info Panel */}
        <div className="register-info">
          <h2>Join AgroCart 🌾</h2>
          <p>
            Create an account to access wholesale prices, bulk ordering,
            and fast delivery for your business.
          </p>

          <ul>
            <li>✔ Best wholesale pricing</li>
            <li>✔ Reliable supply chain</li>
            <li>✔ Dedicated business support</li>
          </ul>
        </div>

        {/* Right Form Panel */}
        <div className="register-card">
          <h3>Create Account</h3>
          <p className="register-subtitle">
            Register your business to get started
          </p>

          <form className="register-form">

            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Owner / Manager Name" />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="business@email.com" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+91 98765 43210" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Create password" />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm password" />
              </div>
            </div>

            <button className="register-btn">Register</button>
          </form>

          <p className="login-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;
