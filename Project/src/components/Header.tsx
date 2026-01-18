import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>AgroCart</h1>

      <nav className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/login">
          <button>Login</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
