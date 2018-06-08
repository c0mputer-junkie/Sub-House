import React, {Component} from 'react';



import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class Map extends Component {
componentDidMount() {




this.map = new mapboxgl.Map({
  container: this.mapContainer,
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-94.5785667, 39.0997265],
  zoom: 3
});

this.map.on('load', () => {

this.map.addSource('pointer', {
  type: 'geojson',
  data:  {
        "type": "FeatureCollection",
        "features": [
          {
        "type": "Feature",
        "properties": {
          "description": "<strong>Large sunny private duplex apartment $900 <br/> (oakland north / temescal)</strong> <br/> <img src=\"https://images.craigslist.org/00303_iyTfMOBEj2X_300x300.jpg\"> <a href=\"https://sfbay.craigslist.org/eby/sub/d/large-sunny-private-duplex/6608473348.html\" target=\"_blank\" title=\"Opens in a new window\">"

        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -122.276780,
            37.836826
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "description": "<strong>Temporary housing in an amazing temescal home! <br/>(oakland north / temescal)</strong> <br/> <img src=\"https://images.craigslist.org/00m0m_4s13RDrMx5Y_300x300.jpg\"> <a href=\"https://sfbay.craigslist.org/eby/sub/d/temporary-housing-in-an/6607223309.html\" target=\"_blank\" title=\"Opens in a new window\">"

        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -122.263700,
            37.836100
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "description": "6/22- 8/18-shared large house $ 900 <br /> (berkeley)</strong> <br/> <img src=\"https://images.craigslist.org/00J0J_4mHozmMNSyd_300x300.jpg\"><a href=\"https://sfbay.craigslist.org/eby/sub/d/shared-large-house-your-own/6600757930.html\" target=\"_blank\" title=\"Opens in a new window\">"

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
          "description": "<strong>Boat Life $1000 <br/>(emeryville)</strong> <br/> <img src=\"https://images.craigslist.org/00f0f_jFm466CH4UA_300x300.jpg\"> <a href=\"https://sfbay.craigslist.org/eby/sub/d/boat-life/6607620175.html\" target=\"_blank\" title=\"Opens in a new window\">"

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
          "description": "<strong>TWO furnished rooms available for July sublet, 3 blocks from BART! <br /> (oakland north / temescal)</strong> <br/> <img src=\"https://images.craigslist.org/01010_4hvUM7umidV_300x350.jpg\"> <a href=\" https://sfbay.craigslist.org/eby/sub/d/two-furnished-rooms-available/6605665282.html\" target=\"_blank\" title=\"Opens in a new window\">"

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
          "description": '<strong>1 Month Sublet in Emeryville $750 <button type="button" id="starFav" class="btn btn-sm btn-default star"><span class="glyphicon glyphicon-star"></span></button><br /> (emeryville) </strong>  <br/> <img src=\"https://images.craigslist.org/00o0o_jNcpIx4SrfZ_300x300.jpg\"><a href=\"https://sfbay.craigslist.org/eby/sub/d/1-month-sublet-in-emeryville/6599648961.html\" target=\"_blank\" title=\"Opens in a new window\">'

        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -122.280400,
            37.836500
          ]
        }
      }
    ]
  }
  });

    this.map.addLayer ({
      id: 'points',
      source: 'pointer',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': 'red'
      }
    });
  });

    this.map.on('click', e => {
      // queried results on map
    const result = this.map.queryRenderedFeatures(e.point, {layers:['points'] }
  );
    if(result.length) {
      // creates a popup instance on popup
      const popup = new mapboxgl.Popup({closeButton: false});
      const craigslistContent = result[0].properties.description;

      console.log({result});
        popup.setLngLat(e.lngLat)
        .setHTML(`<h3>${craigslistContent}</h3>More info`)
        .addTo(this.map);

        const favElement = document.getElementById('starFav');
        favElement.addEventListener("click", ()=>{
          localStorage.setItem('1', JSON.stringify(result[0].properties.description));
        });
    }

  });


      }

  componentWillUnmount() {
    this.map.remove();
  }
  render() {
    const style= {
      position: 'absolute',
      height: '75%',
      width: '75%',

    };

    return (
      <div
      style={style} ref={el => this.mapContainer = el}

      />
    );
  }
}



export default Map;
