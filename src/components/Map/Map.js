import React, {Component} from 'react';

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import dotenv from 'dotenv';
// dotenv.config()



const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiYW5hZGlzb24xIiwiYSI6ImNqaGd1OG56MDAzeWozN21wMW9ha2w1YTYifQ.d8thRQ_3hqIZNz_COAyqag'
  });

  class Mapboxgl extends Component {
  render() {
    return (

      // in render()
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
        <Layer
        type="symbol"
        id="marker"
        layout={{ "icon-image": "marker-15", "icon-size": 5}}>
        <Feature coordinates={[-0.016432, 51.555321]}/>
      </Layer>
      </Map>
    )
  }
};



export default Mapboxgl;
