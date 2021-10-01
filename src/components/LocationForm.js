import React, { useState } from 'react';
import Geonames from 'geonames.js';
import MapVisuals from './MapVisual';

//Credentials for accessing geonames api
const geonames = Geonames({
    username: 'cchirwa',
    lan: 'en',
    encoding: 'JSON'
  });

const pageStyles = {
  basic : {
    height: '50px',

  }
}

async function generator(place) {
  try{
    const result = []
    const locale = await geonames.search({q: `${place}`}) 
    //console.log(locale.geonames[0])

    //lat = center of north and south so add a set degree for NandS bounds
    //lng = east and west add a set degree for bounds 
    const lat = locale.geonames[0].lat
    const lng = locale.geonames[0].lng

    //The bounding box set offset from locale by ~28 lat miles & 22 lng miles
    const north = parseFloat(lat + .40)
    const south = parseFloat(lat - .40)
    const west = parseFloat(lng - .40)
    const east = parseFloat(lng + .40)

    const earthQuakeData= await geonames.earthquakes({south,north,east,west});

    const list =   earthQuakeData.earthquakes
    list.forEach( element => {
      const earthquakeData = {
        lat: element.lat,
        lng: element.lng,
        mag : element.magnitude
      }
      console.log(list)
      result.push(earthquakeData)
    });

    return (result);

    } catch(err) {
      //in case of miss spelling errors
      console.error(err);
      return (MajorQuake)
    }
}


const MajorQuake = [{
  lat: -38.24,
  lng: -73.05
}]   

const LocationForm = (props) =>{

    const [location,setLocation] = useState("")
    const [quakeData,setQuakeData] = useState([])

    const addLocation = (event) => {
        event.preventDefault()
        generator(location).then(res => setQuakeData(res))
      }

    const handleLocationChange = (event) => {
        console.log(event.target.value)
        setLocation(event.target.value)
    }
    
    return (
        <div>
            <form onSubmit={addLocation}>
                <input 
                style={pageStyles.basic}
                value={location} 
                onChange={handleLocationChange}/>
                <button type="submit">search</button>
            </form> 
            <div >
            { 
              quakeData.length>0?
             <MapVisuals data={quakeData}/>:<MapVisuals data={MajorQuake} />
            }
            </div>
        </div>
    )
}

export default LocationForm;