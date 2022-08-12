import React, { useState } from 'react';
import LocationForm from './LocationForm';
import Footer from './Footer';
import '../App.css';

const pageStyles = {
    main: {
        
    },
};

function Search() {

  const [quakeData,setQuakeData] = useState([{}])

  const handleData = (data) =>{
    setQuakeData(data)
    console.log('quake data in maps',quakeData)
  }

  return (
    <div style={pageStyles.main}>
        <div className="MainContent">
          <LocationForm />
          <Footer />
        </div>
    </div>
  );
}

export default Search;
