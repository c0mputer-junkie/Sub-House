import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';

// mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hZGlzb24xIiwiYSI6ImNqaGd1OG56MDAzeWozN21wMW9ha2w1YTYifQ.d8thRQ_3hqIZNz_COAyqag';

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

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
      "properties": {
        "description": "<strong>Chill sublet north of DT Oakland with Adorable Pupper 6/18-7/15,</strong> <a href=\"https://sfbay.craigslist.org/eby/sub/d/chill-sublet-north-of-dt/6585480838.html/\" target=\"_blank\" title=\"Opens in a new window\">",

      },
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
      "properties": {
        "description": "<strong>1 Month Sublet in Emeryville ,</strong> <a href=\"https://sfbay.craigslist.org/eby/sub/d/1-month-sublet-in-emeryville/6599648961.html/\" target=\"_blank\" title=\"Opens in a new window\">",
        "icon" : "theatre"
      },
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
      "properties": {
        "description": "<6/22- 8/18-shared large house,</strong> <a href=\"https://sfbay.craigslist.org/eby/sub/d/shared-large-house-your-own/6600757930.html/\" target=\"_blank\" title=\"Opens in a new window\">",
        "icon" : "theatre"
      },
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
      "properties": {
        "description": "<strong>Room in Sunny South Berkeley Flat,</strong> <a href=\"https://sfbay.craigslist.org/eby/sub/d/room-in-sunny-south-berkeley/6601451926.html/\" target=\"_blank\" title=\"Opens in a new window\">",
        "icon" : "theatre"
      },
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
      "properties": {
        "description": "<strong>Sweet Summer Sublet,</strong> <a href=\"https://sfbay.craigslist.org/eby/sub/d/sweet-summer-sublet/6600558487.html/\" target=\"_blank\" title=\"Opens in a new window\">",
        "icon" : "theatre"
      },
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
      "properties": {
        "description": "<strong>End of July sublet - whole 3 bedroom apartment - Temescal,</strong> <a href=\"https://sfbay.craigslist.org/eby/sub/d/chill-sublet-north-of-dt/6585480838.html/\" target=\"_blank\" title=\"Opens in a new window\">",
        "icon" : "theatre"
      },
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
    });

      }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style ={
      position: 'absolute',
      height: '85%',
      width: '85%',
      center: [-122.2852, 37.8313],
      zoom : 0

    };

    return <div style={style} ref={el => this.mapContainer = el} />;
  }
}

export default Map;
