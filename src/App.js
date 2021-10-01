import logo from './logo.svg';
import React, { useState } from 'react';
import LocationForm from './components/LocationForm'
import MapVisuals from './components/MapVisual';
import './App.css';

function App() {

  const [quakeData,setQuakeData] = useState([{}])

  const handleData = (data) =>{
    setQuakeData(data)
    console.log('quake data in maps',quakeData)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LocationForm />
      </header>
    </div>
  );
}

export default App;
