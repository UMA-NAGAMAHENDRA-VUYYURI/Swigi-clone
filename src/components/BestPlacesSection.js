import React from 'react';
import './BestPlacesSection.css';

const cities = [
  "Bangalore",
  "Pune",
  "Mumbai",
  "Delhi",
  "Hyderabad",
  "Kolkata",
  "Chennai",
  "Chandigarh",
  "Ahmedabad",
  "Jaipur"
  ,
];

const BestPlacesSection = () => {
  return (
    <div className="best-places-container">
      <h2>Best Places to Eat Across Cities</h2>
      <div className="button-grid">
        {cities.slice(0, 8).map((city, index) => (
          <button key={index} className="city-button">
            Best Restaurants in {city}
          </button>
        ))}
        <button className="city-button show-more">Show More &#9662;</button>
      </div>
    </div>
  );
};

export default BestPlacesSection;
