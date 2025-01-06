import React from "react";
import "./Navbar.css";


const MobileNavbar = () => {
  return (
    <nav className="bottom-navbar">
      <div className="nav-item">
        <i className="fas fa-home"></i>
        <span>Home</span>
      </div>
      <div className="nav-item">
        <i className="fas fa-th-large"></i>
        <span>Categories</span>
      </div>
      <div className="nav-item">
        <i className="fas fa-shopping-cart"></i>
        <span>Cart</span>
      </div>
      <div className="nav-item">
        <i className="fas fa-user"></i>
        <span>Account</span>
      </div>
    </nav>
  );
};

export default MobileNavbar;