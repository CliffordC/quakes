import React, { useState } from 'react';
import Geonames from 'geonames.js';


const geonames = Geonames({
    username: 'cchirwa',
    lan: 'en',
    encoding: 'JSON'
  });

async function generator(place) {
    try{
        const locale = await geonames.search({q: `${place}`}) 
        //console.log(locale.geonames[0])

        //lat = center of north and south so add a set degree for NandS bounds
        //lng = east and west add a set degree for bounds 
        const lat = locale.geonames[0].lat
        const lng = locale.geonames[0].lng

        const north = parseFloat(lat + .10)
        const south = parseFloat(lat - .10)
        const west = parseFloat(lng - .10)
        const east = parseFloat(lng + .10)
        console.log(south,north,east,west)

        const earthQuakeData= await geonames.earthquakes({south,north,east,west});
        //const countries = await geonames.countryInfo({}) //get continents
        //const states = await geonames.children({geonameId: countries.geonames[0].geonameId}) // gets USA states at 232
        //const regions = await geonames.children({geonameId: states.geonames[0].geonameId});
        //const cities = await geonames.children({geonameId: regions.geonames[0].geonameId});
        //console.log(continents);
        
        return (earthQuakeData);
      }catch(err){
        console.error(err);
      }
}

const LocationForm = (props) => {

    const [location,setLocation] = useState("")

    const addLocation = (event) => {
        event.preventDefault()
        const list = []
        const data = generator(location)
        data.earthquakes.forEach( element => {
             list.push(element.lat,element.lng)    
        })
        console.log(list)
        //props.handleLocation(data)
      }

    const handleLocationChange = (event) => {
        console.log(event.target.value)
        setLocation(event.target.value)
    }
    

    return (
        <div>
            <form onSubmit={addLocation}>
                <input 
                value={location} 
                onChange={handleLocationChange}/>
                <button type="submit">search</button>
            </form>   
        </div>
    )
}

export default LocationForm;