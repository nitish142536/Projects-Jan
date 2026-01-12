import React from 'react';
import '../index.css';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <h1 >AgroCart</h1>
      <nav className="space-x-6">
        <a href="#" >Home</a>
        <a href="#" >Products</a>
        <a href="#" >Bulk Order</a>
       <Link to="/contact">Contact</Link>
        <button >Login</button>
      </nav>
    </header>
  );
};

export default Header;
