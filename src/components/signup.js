// src/components/SignUp.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import './SignUp.css'; // Import your CSS file here

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="container">
      {/* Left floating images */}
      {/* <div className="images left">
        <img src="Pav Bhaji.avif" alt="Image 1" />
        <img src="Pastry.avif" alt="Image 2" />
        <img src="Kebab.avif" alt="Image 3" />
      </div> */}

      <div className={`wrapper ${isSignUp ? 'animated-signup' : 'animated-signin'}`}>
        {/* Sign-Up Form */}
        {isSignUp && (
          <div className="form-container sign-up">
            <form>
              <h2>Sign Up</h2>
              <div className="form-group">
                <input type="text" required />
                <FontAwesomeIcon icon={faUser} />
                <label>Username</label>
              </div>
              <div className="form-group">
                <input type="email" required />
                <FontAwesomeIcon icon={faAt} />
                <label>Email</label>
              </div>
              <div className="form-group">
                <input type="password" required />
                <FontAwesomeIcon icon={faLock} />
                <label>Password</label>
              </div>
              <div className="form-group">
                <input type="password" required />
                <FontAwesomeIcon icon={faLock} />
                <label>Confirm Password</label>
              </div>
              <button type="submit" className="btn">Sign Up</button>
              <div className="link">
                <p>
                  You already have an account?
                  <button type="button" onClick={toggleForm} className="signin-link"> Sign In</button>
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Sign-In Form */}
        {!isSignUp && (
          <div className="form-container sign-in">
            <form>
              <h2>Login</h2>
              <div className="form-group">
                <input type="text" required />
                <FontAwesomeIcon icon={faUser} />
                <label>Username</label>
              </div>
              <div className="form-group">
                <input type="password" required />
                <FontAwesomeIcon icon={faLock} />
                <label>Password</label>
              </div>
              <div className="forgot-pass">
                <a href="./">Forgot password?</a>
              </div>
              <button type="submit" className="btn">Login</button>
              <div className="link">
                <p>
                  Don't have an account?
                  <button type="button" onClick={toggleForm} className="signup-link"> Sign Up</button>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Right floating images */}
      {/* <div className="images right">
        <img src="Ice Cream.avif" alt="Image 4" />
        <img src="Burger.avif" alt="Image 5" />
        <img src="Dosa.avif" alt="Image 6" />
      </div> */}
    </div>
  );
};

export default SignUp;
