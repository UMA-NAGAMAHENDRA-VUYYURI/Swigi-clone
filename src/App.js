// src/App.js
import React from 'react';
import Header from './components/Header'; // Ensure these paths are correct
import MainSection1 from './components/MainSection1';
import MainSection2 from './components/MainSection2';
import MainSection3 from './components/MainSection3';
import MainSection4 from './components/MainSection4';
import MainSection5 from './components/MainSection5';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap once in your entry point

function App() {
  return (
    <div>
      <Header />
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
      <MainSection4 />
      <MainSection5 />
    </div>
  );
}

export default App;
