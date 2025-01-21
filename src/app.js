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
import signup from './components/signup';
import ContactForm from './components/ContactForm';
import SidePanelModal from './components/SidePanelModal';
import BlogSection from './components/BlogSection';
import Collection from './components/Collection';

import 'bootstrap/dist/css/bootstrap.min.css';
import FooterSection from './components/FooterSection';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Sidebar Modal */}
      <SidePanelModal isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Sections */}
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
      <MainSection4 />
      <MainSection5 />
      <Collection />

      {/* Best Sections */}
      <BestPlacesSection />
      <BestGrocery />

      {/* Routes */}
      <Routes>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<signup />} />
        <Route path="/instamart" element={<Instamart />} />
        <Route path="/BlogSection" element={<BlogSection />} />
      </Routes>

      {/* Footer */}
      <Footer/>

      {/* Bottom Navbar */}
      <BottomNavbar />
    </div>
  );
}

export default App;
