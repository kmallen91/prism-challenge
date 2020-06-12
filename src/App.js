import React from 'react';

// Components
import Navbar from './components/nav'
import Overview from './components/overview'

// Styles
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Overview />
    </div>
  );
}

export default App;
