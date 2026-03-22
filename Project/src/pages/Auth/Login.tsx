import React, { useState } from 'react';
import '../../index.css';
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../Service/LoginApi"; // adjust path if needed

const Login: React.FC = () => {
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Submit handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await loginUser(email, password);

      console.log("Login Success:", response);

      // Save user data (optional)
      localStorage.setItem("user", JSON.stringify(response));

      // Redirect after login
      navigate("/products");

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
        </div>

        {/* Right Section */}
        <div className="login-card">
          <h3>Login</h3>
          <p className="login-subtitle">
            Enter your credentials to continue
          </p>

          {/* ERROR MESSAGE */}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <form className="login-form" onSubmit={handleLogin}>
            
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="you@restaurant.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
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