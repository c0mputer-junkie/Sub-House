import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";


const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYW5hZGlzb24xIiwiYSI6ImNqaGd1OG56MDAzeWozN21wMW9ha2w1YTYifQ.d8thRQ_3hqIZNz_COAyqag"
});

class Mapbox extends Component {
  render () {
    return (
      <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: "100vh",
    width: "100vw"
  }}>
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
    </Layer>
</Map>
    );
  }
}

  export default Mapbox;
