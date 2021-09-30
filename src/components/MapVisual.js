import React from 'react';
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

// TO DO: 
// - Change where MapVisuals is called. That way it is not called
// at time to render. Put it in LocationForm and have it display the map
// with Markers for earthquake locations.
// 
// - Make the site pretty
// 
// - Make sure gh-pages displays the webpage online 
// 
// 

const MapVisuals = ({locations}) =>{
    console.log('IN Map Visuals',locations)
    //const list = [...locations]
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "API_KEY_HERE"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ 
            <Marker
            position={{ lat: -34.397, lng: 150.644 }}
          />
        }
        <></>
      </GoogleMap>
  ) : <></>
}

export default MapVisuals;