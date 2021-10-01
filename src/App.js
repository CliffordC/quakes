import logo from './logo.svg';
import React, { useState } from 'react';
import LocationForm from './components/LocationForm'
import MapVisuals from './components/MapVisual';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [quakeData,setQuakeData] = useState([{}])

  const handleData = (data) =>{
    setQuakeData(data)
    console.log('quake data in maps',quakeData)
  }

  return (
    <div className="App">
        <div className="MainContent">
          <LocationForm />
          <Footer />
        </div>
    </div>
  );
}

export default App;
