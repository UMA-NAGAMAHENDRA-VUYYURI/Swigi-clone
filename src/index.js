import React from 'react';
import ReactDOM from 'react-dom/client'; // Change here
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(<App />); // Use root.render() instead of ReactDOM.render()
