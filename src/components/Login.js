// src/components/login.js
import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
    };

    const handleCancel = () => {
        // Clear the input fields
        setUsername('');
        setPassword('');
    };

    return (
        <div className="login-container">
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" 
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleCancel} type="button">Cancel</button>
        </div>
    );
};

export default Login;