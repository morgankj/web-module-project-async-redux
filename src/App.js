import axios from 'axios';
import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TrendingGallery from './components/TrendingGallery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <p>Enjoy 20 trending gifs from today!</p>
      <TrendingGallery />
    </div>
  );
}

export default App;