import axios from 'axios';
import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TrendingGallery from './components/TrendingGallery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TrendingGallery />
    </div>
  );
}

export default App;