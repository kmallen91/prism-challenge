import React, { useState, useEffect } from 'react';
import axios from 'axios'

// Components
import Navbar from './components/nav'
import Overview from './components/overview'
import OverviewData from './components/overview-data'

// Styles
import './styles/App.css';

function App() {
  
  
  const [sources, setSources] = useState()
  const [info, setInfo] = useState()
  
  
  useEffect(() => {
    axios 
      .get('https://prism-challenge-backend.herokuapp.com/data')
      .then(res => setSources(res.data))
      .catch(err => console.log('error from sources get', err))
    }, [])
    
    useEffect(() => {
      axios 
      .get('https://prism-challenge-backend.herokuapp.com/data/info')
      .then(res => setInfo(res.data))
      .catch(err => console.log('error from info get', err))
    }, [])
    
                   

  return (
    <div className="App">
      <Navbar />
      <Overview />
      <OverviewData sources = {sources} />
    </div>
  );
}

export default App;
