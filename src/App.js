import logo from './logo.svg';
import React,{ useState }from 'react';
import LocationForm from './components/LocationForm'
import MapVisuals from './components/MapVisual';
import './App.css';

function App() {

  const [quakeLocations,setQuakeLocations] = useState([])

  const handleLocationChange = (data) => {
    setQuakeLocations(data)
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
        <LocationForm handleLocation={handleLocationChange}/>
        <MapVisuals locations={quakeLocations}/>
      </header>
    </div>
  );
}

export default App;
