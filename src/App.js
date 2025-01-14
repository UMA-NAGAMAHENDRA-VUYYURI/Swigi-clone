// src/App.js
import './index.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Router components
import Header from './components/Header';
import MainSection1 from './components/MainSection1';
import MainSection2 from './components/MainSection2';
import MainSection3 from './components/MainSection3';
import MainSection4 from './components/MainSection4';
import MainSection5 from './components/MainSection5';
import BestPlacesSection from './components/BestPlacesSection';
import BottomNavbar from './components/BottomNavbar';
import MobileNavbar from './components/MobileNavbar';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Instamart from './components/Instamart';
import SignUp from './components/SignUp';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      {/* Header visible on all pages */}
      <Header />

      {/* Routes to different pages */}
      <Routes>
        {/* Homepage route, renders all sections */}
        <Route path="/" element={
          <>
            <MainSection1 />
            <MainSection2 />
            <MainSection3 />
            <MainSection4 />
            <MainSection5 />
          </>
        } />
        
        {/* Other pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/instamart" element={<Instamart />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/best-places" element={<BestPlacesSection />} />

        {/* SignUp page will replace other content when navigated */}
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>

      {/* Bottom Navbar, Mobile Navbar, and Footer always visible except on /SignUp */}
      <Routes>
        <Route path="/SignUp" element={null} />  {/* Prevent navbar/footer on SignUp page */}
        
        <Route path="/" element={
          <>
            <BottomNavbar />
            <MobileNavbar />
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
