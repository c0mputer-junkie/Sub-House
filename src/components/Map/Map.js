import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hZGlzb24xIiwiYSI6ImNqaGd1OG56MDAzeWozN21wMW9ha2w1YTYifQ.d8thRQ_3hqIZNz_COAyqag';


class Map extends Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9'
    });


    this.map.on('load', () => {
      this.map.addSource('pointSource', {
        type: 'geojson',
        data:  {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.277167,
          37.822345
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2804,
          37.8365
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.28318,
          37.849526
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.27278,
          37.846926
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.276158,
          37.846257
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.263700,
          37.836100
        ]
      }
    }
  ]
}
});

      this.map.addLayer ({
        id: 'points',
        source: 'pointSource',
        type: 'circle'
      });
    })

      }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style ={
      position: 'absolute',
      height: '85%',
      width: '85%',
      center: [0,0],
      zoom : 0

    };

    return <div style={style} ref={el => this.mapContainer = el} />;
  }
}

export default Map;
