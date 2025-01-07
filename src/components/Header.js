import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="nav-bar">
        <div className="top-bar">
          <div className="logo">
            <a href="/">
              <img src="/images/Swiggy_logo_bml6he.png" alt="Swiggy Logo" />
            </a>
          </div>
          <div className="nav-options">
            <a href="/corporate"><h4>Swiggy Corporate</h4></a>
            <a href="/partner"><h4>Partner with us</h4></a>
            <a href="/app">
              <p>
                Get the App <i className="fa fa-long-arrow-up icon" aria-hidden="true"></i>
              </p>
            </a>
            <a href="/signin"><h3>Sign in</h3></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
