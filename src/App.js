import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';  

import './index.css';
import Header from './components/Header';
import MainSection1 from './components/MainSection1';
import MainSection2 from './components/MainSection2';
import MainSection3 from './components/MainSection3';
import MainSection4 from './components/MainSection4';
import MainSection5 from './components/MainSection5';
import BestPlacesSection from './components/BestPlacesSection';
import BestGrocery from './components/BestGrocery';
import BottomNavbar from './components/BottomNavbar';
import MobileNavbar from './components/MobileNavbar';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Footer from './components/Footer';
import Instamart from './components/Instamart';
import SignUp from './components/Signup';
import SidePanelModal from './components/SidePanelModal';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Header is visible on all pages */}
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainSection1 />
              <MainSection2 />
              <MainSection3 />
              <MainSection4 />
              <MainSection5 />
              <BestPlacesSection />
              <BestGrocery />
              <Instamart />
              <ContactUs />
              <BottomNavbar />
              <MobileNavbar />
              <Footer />
            </>
          }
        />

        {/* Other pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/Instamart" element={<Instamart />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Best-places" element={<BestPlacesSection />} />
        <Route path="/SignUp" element={<SignUp />} />

        {/* Prevent navbar/footer on SignUp page */}
        <Route
          path="/SignUp"
          element={
            <>
              <SignUp />
            </>
          }
        />
      </Routes>

      {/* Sidebar Modal only visible when sidebar is open */}
      <SidePanelModal isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
