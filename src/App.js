// src/App.js
import React from 'react';
import Header from './components/Header'; // Ensure these paths are correct
import MainSection1 from './components/MainSection1';
import MainSection2 from './components/MainSection2';
import MainSection3 from './components/MainSection3';
import MainSection4 from './components/MainSection4';
import MainSection5 from './components/MainSection5';
import BestPlacesSection from './components/BestPlacesSection';
import BestGroceries from './components/BestGroceries';
import  BottomNavbar  from './components/BottomNavbar';
import  MobileNavbar  from './components/MobileNavbar';
import  ContactUs  from './components/ContactUs';
import  Login  from './components/Login';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap once in your entry point

function App() {
  return (
    <div>
      
      <Header />
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
      <MainSection4 />
      <BestPlacesSection />
      <BestGroceries/>
      <MobileNavbar/>
      <ContactUs/>
      <Login/>
      <BottomNavbar/>
    </div>
  );
}

export default App;
