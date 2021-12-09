import React from 'react';
import './App.css';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import TrendingGallery from './components/TrendingGallery';

function App() {
  return (
    <StyledApp className="App">
      <Navbar />
      <h2>See 40 characters from the DragonAge© franchise below!</h2>
      <TrendingGallery />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  h2 {
    font-size: 2rem;
    margin: 4%;
  }
`