import React, { useState } from 'react';
import Geonames from 'geonames.js';
import MapVisuals from './MapVisual';

const geonames = Geonames({
    username: 'cchirwa',
    lan: 'en',
    encoding: 'JSON'
  });

async function generator(place) {
    try{
        const result = []
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

        const earthQuakeData= await geonames.earthquakes({south,north,east,west});
        //const countries = await geonames.countryInfo({}) //get continents
        //const states = await geonames.children({geonameId: countries.geonames[0].geonameId}) // gets USA states at 232
        //const regions = await geonames.children({geonameId: states.geonames[0].geonameId});
        //const cities = await geonames.children({geonameId: regions.geonames[0].geonameId});
        //console.log(continents);
        //console.log(earthQuakeData.earthquakes)

        const list =   earthQuakeData.earthquakes
        list.forEach( element => {
          const chunck = {
            lat: element.lat,
            lng: element.lng
          }
          result.push(chunck)
        });
        console.log('quake data: ',(result))
        return (result);
      }catch(err){
        console.error(err);
      }
}

const defaultData = [{
        lat: 47.60,
        lng: -122.33}]

const LocationForm = (props) =>{

    const [location,setLocation] = useState("")
    const [quakeData,setQuakeData] = useState([])

    const MajorQuake = {
      lat: 38.14,
      lng: 73.41
    } 
  

    const addLocation = (event) => {
        event.preventDefault()
        generator(location).then(res => setQuakeData(res))
        // //console.log('data length', data.length)
        // setTimeout(()=> {
        //   console.log('length',(data))
        //   const list = {...data}
        //   //if(data.length>0){
        //     props.handleData(list)
        //   // }else{
        //   //   console.log('default data')
        //   //   const defaultData = [{
        //   //     lat: 47.60,
        //   //     lng: -122.33}]
        //   //   handleData(defaultData)
        //   // } 
        //   }, 5000);
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
            <div >
            { 
              quakeData.length>0?
             <MapVisuals data={quakeData}/>:<MapVisuals data={defaultData} />
            }
            </div>
        </div>
    )
}

export default LocationForm;