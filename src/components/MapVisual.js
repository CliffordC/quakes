import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react'

const containerStyle = {
  width: '400px',
  height: '400px'
};

const MarkerStyle = {
  color: 'white',
  fontsize: '20px',
  backgroundColor: 'black',
  height: '28px',
  width: '42px',
  borderRadius: '5px',
}

const center = {
  lat: parseFloat(47.60),
  lng: parseFloat(-122.33)
};

const AnyReactComponent = ({ text }) => <div style={MarkerStyle}>{text}</div>;


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

const MapVisuals = ({data}) =>{
    console.log('In Map Visuals',data)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY
  })

  const [map, setMap] = React.useState(null)
  const [info,setData] = React.useState([])
  

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
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
        zoom={10}
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
              />)
             })
             }
      </GoogleMap>
  ) : <></>
  // const defaultProps = {
  //   zoom: 11
  // };
  // return (
  //   <div style={{ height: '100vh', width: '75%' }}>
  //     <GoogleMapReact
  //       bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
  //       defaultCenter={center}
  //       defaultZoom={defaultProps.zoom}
  //     >
        
  //         {props.data.map( (element,index) =>(
  //           <AnyReactComponent
  //             lat={element.lat}
  //             lng={element.lng}
  //             text= "Quake Here!"
  //             key={index}
  //           />
  //           )
  //         )
          
  //       }
        
        
  //     </GoogleMapReact>
  //   </div>
  //   )
}

export default MapVisuals;