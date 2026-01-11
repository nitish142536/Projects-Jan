import React from 'react';
import '../index.css';
const Header = () => {
  return (
    <header className="header">
      <h1 >AgroCart</h1>
      <nav className="space-x-6">
        <a href="#" >Home</a>
        <a href="#" >Products</a>
        <a href="#" >Bulk Order</a>
        <a href="#" >Contact</a>
        <button >Login</button>
      </nav>
    </header>
  );
};

export default Header;
