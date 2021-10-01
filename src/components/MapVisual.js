import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoBox } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '650px'
};

const center = [{
  lat: 47.60,
  lng: -122.33
}];

// TO DO: 
// - Change where MapVisuals is called. That way it is not called
// at time to render. Put it in LocationForm and have it display the map
// with Markers for earthquake locations.
// 
// - Make the site pretty
// 
// - Make sure gh-pages displays the webpage online 

//Google map code gotten from @react-google-maps/api 
const MapVisuals = ({data}) =>{
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY
  })

  const [map, setMap] = React.useState(null)
  const [info,setData] = React.useState([])
  

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    console.log(bounds)
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return isLoaded? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
          {
          data.map((element,index) => {
            console.log('In locations',element)
            return (
              <Marker
                position={{ lat: element.lat, lng: element.lng }}
                key={index}
                onClick={()=>alert(`Magnitude ${element.mag}`)}
              />)
             })
             }
      </GoogleMap>
  ) : <></>
}

export default MapVisuals;