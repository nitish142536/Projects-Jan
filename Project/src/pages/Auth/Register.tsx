import React, { useState } from "react";
import '../../index.css';
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Service/RegisterApi";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await registerUser({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        password: form.password
      });

      alert("Registration successful ✅");

      // ✅ Redirect to Login page
      navigate("/login");

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">

        <div className="register-info">
          <h2>Join AgroCart 🌾</h2>
        </div>

        <div className="register-card">
          <h3>Create Account</h3>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <form className="register-form" onSubmit={handleSubmit}>

            <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
            <input name="phone" placeholder="Phone" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
            <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} required />

            <button className="register-btn" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>

          </form>

          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;