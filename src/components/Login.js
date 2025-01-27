// src/components/Login.js
import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); //Error state for validation

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter valid details");
      return;
    }

    console.log("Logged in with username: ", username);
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
    setError(""); 
  };

  return (
    <div>
      <form className="modal-form" onSubmit={handleLogin}>
        <div className="input-group">
          <input
            type="text"
            name="username"
            id="username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
           
            autoComplete="off"
            required
          />
          <label htmlFor="username" className="input-label">
            Username
          </label>
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            id="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           
            autoComplete="off"
            required
          />
          <label htmlFor="password" className="input-label">
            Password
          </label>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="login-button-wrapper">
          <button type="submit" className="login-button">
            Login
          </button>
        </div>

        

        <div className="terms-conditions">
          By clicking on Login, I accept the{" "}
          <a href="/terms-and-conditions" className="terms-link">
            Terms & Conditions
          </a>{" "}
          &{" "}
          <a href="/privacy-policy" className="privacy-link">
            Privacy Policy
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
