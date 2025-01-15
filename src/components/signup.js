import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faLock } from "@fortawesome/free-solid-svg-icons";  // Import FontAwesome icons
import "./SidePanelWithForm.css";
import "./Signup.css";

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(true);  // State to toggle between SignUp and SignIn forms

  const toggleForm = () => {
    setIsSignUp(!isSignUp);  // Toggle between sign-up and sign-in
  };

  return (
    <form className="modal-form">
      {/* Name input for Sign-Up */}
      <div className="input-group">
        <input
          type="text"
          name="name"
          id="name"
          className="input-field"
          autoComplete="off"
          required
        />
        <label htmlFor="name" className="input-label">
          Full Name
        </label>
      </div>

      {/* Wrapper for the Sign-Up and Sign-In forms */}
      <div className={`wrapper ${isSignUp ? "animated-signup" : "animated-signin"}`}>
        {/* Sign-Up Form */}
        {isSignUp && (
          <div className="form-container sign-up">
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
                You already have an account?{" "}
                <button type="button" onClick={toggleForm} className="signin-link">
                  Sign In
                </button>
              </p>
            </div>
          </div>
        )}

        {/* Sign-In Form */}
        {!isSignUp && (
          <div className="form-container sign-in">
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
                Don't have an account?{" "}
                <button type="button" onClick={toggleForm} className="signup-link">
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </form> 
  );
}
export default Signup;
  
