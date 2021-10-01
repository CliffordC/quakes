import React from 'react';


const Footer = () => {

    return (
        <div>
            <p style={{color:'white'}}>
                Welcome!<br/>This site helps you visualize earthquake
            data gathered from the geonames API. It then plots those points on 
            google maps. <br/>Just input a name of a location/city and markers 
            will appear on the map if any earthquakes have occured in that in the past.
            <br/>Mind your spelling.
            </p>
        </div>    
    )
}

export default Footer;