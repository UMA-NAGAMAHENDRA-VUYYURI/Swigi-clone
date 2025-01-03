import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18's createRoot API
import { SpeedInsights } from "@vercel/speed-insights/react"; // Import SpeedInsights
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root

root.render(
  <React.StrictMode>
    <div>
      <SpeedInsights /> {/* Add SpeedInsights at the root level */}
      <App />
    </div>
  </React.StrictMode>
);
