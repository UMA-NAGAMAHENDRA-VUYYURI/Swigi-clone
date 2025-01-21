import React from 'react';
import './FooterSection.css'; // Create a corresponding CSS file for styles

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Logo or brand name */}
        <div className="footer-logo">
          <img src="/path/to/logo.png" alt="Swiggy Logo" className="footer-logo-img" />
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@swiggyclone.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SwiggyClone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
