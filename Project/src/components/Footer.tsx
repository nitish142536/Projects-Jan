import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import '../index.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        
        {/* About */}
        <div className="footer-section">
          <h3 className="footer-title">AgroCart</h3>
          <p className="footer-text">
            Direct sourcing of fresh raw materials for restaurants and hotels. Wholesale pricing, fast delivery, and quality guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Bulk Order</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-text">123 Green Street, Mumbai, India</p>
          <p className="footer-text">Email: support@rawmaterialb2b.com</p>
          <p className="footer-text">Phone: +91 9876543210</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} RawMaterial B2B. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
