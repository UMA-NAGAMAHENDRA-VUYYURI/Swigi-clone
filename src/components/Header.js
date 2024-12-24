import React from 'react';
import './Header.css'; // Make sure to create a corresponding CSS file

function Header() {
  return (
    <header>
      <div className="nav-bar clearfix">
        <div className="top-bar">
          <div className="logo">
            <a href="./components">
              <img src="/images/Swiggy_logo_bml6he.png" alt="Swiggy Logo" />
            </a>
          </div>
          <div className="nav-options">
            <div className='font'><a href="./components"><h4>Swiggy Corporate</h4></a></div>
            <div className='font'><a href="https://example.com"><h4>Partner with us</h4></a></div>
            <div className="get-app">
              <a href="https://example.com">
                <p>Get the App <i className="fa fa-long-arrow-up icon" aria-hidden="true"></i></p>
              </a>
            </div>
            <div className="sign-in">
              <a href="./components/signup"><h3>Sign in</h3></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
