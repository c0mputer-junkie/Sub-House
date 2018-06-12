import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';



mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class Map extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     const popupStar = false;
  //   };
  // };

componentDidMount() {


this.map = new mapboxgl.Map({
  container: this.mapContainer,
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-95.87444616097513, 40.0481814794457],
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
          "description":' <strong>Large sunny private duplex apartment $900 <button type="button" id="starFav" class="btn btn-sm btn-default star"><span class="glyphicon glyphicon-star role="button""></span></button><br/> (oakland north / temescal)</strong> <br/> <img src=\"https://images.craigslist.org/00303_iyTfMOBEj2X_300x300.jpg\"> <a href=\"https://sfbay.craigslist.org/eby/sub/d/large-sunny-private-duplex/6608473348.html\" target=\"_blank\" title=\"Opens in a new window\">'

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
          "description": '<strong>Temporary housing in an amazing temescal home! $ 1000 <button type="button" id="starFav" class="btn btn-sm btn-default star"><span class="glyphicon glyphicon-star"></span></button><br/>(oakland north / temescal)</strong> <br/> <img src=\"https://images.craigslist.org/00m0m_4s13RDrMx5Y_300x300.jpg\"> <a href=\"https://sfbay.craigslist.org/eby/sub/d/temporary-housing-in-an/6607223309.html\" target=\"_blank\" title=\"Opens in a new window\">'
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
          "description":' 6/22- 8/18-shared large house $ 900 <button type="button" id="starFav" class="btn btn-sm btn-default star"><span class="glyphicon glyphicon-star"></span></button> <br /> (berkeley)</strong> <br/> <img src=\"https://images.craigslist.org/00J0J_4mHozmMNSyd_300x300.jpg\"><a href=\"https://sfbay.craigslist.org/eby/sub/d/shared-large-house-your-own/6600757930.html\" target=\"_blank\" title=\"Opens in a new window\">'

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
          "description": '<strong>Boat Life $1000 <button type="button" id="starFav" class="btn btn-sm btn-default star"><span class="glyphicon glyphicon-star"></span></button> <br/>(emeryville)</strong> <br/> <img src=\"https://images.craigslist.org/00f0f_jFm466CH4UA_300x300.jpg\"> <a href=\"https://sfbay.craigslist.org/eby/sub/d/boat-life/6607620175.html\" target=\"_blank\" title=\"Opens in a new window\">'

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
          "description": '<strong>TWO furnished rooms available for July sublet, 3 blocks from BART! <button type="button" id="starFav" class="btn btn-sm btn-default star"><span class="glyphicon glyphicon-star"></span></button> <br /> (oakland north / temescal)</strong> <br/> <img src=\"https://images.craigslist.org/00F0F_2EKSh4kLdh9_300x300.jpg\"> <a href=\" https://sfbay.craigslist.org/eby/sub/d/two-furnished-rooms-available/6605665282.html\" target=\"_blank\" title=\"Opens in a new window\">'

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
          "description": '<strong>Nice one Bedroom sublet!$995 <button type="button" id="starFav" class="btn btn-sm btn-default star"><span class="glyphicon glyphicon-star"></span></button><br /> (oakland east) </strong>  <br/> <img src=\"https://images.craigslist.org/00303_gYZt0KS8Z7w_300x300.jpg\"><a href=\"https://sfbay.craigslist.org/eby/sub/d/nice-one-bedroom-sublet/6608860825.html\" target=\"_blank\" title=\"Opens in a new window\">'

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
      id: 'Point',
      source: 'pointer',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': 'red'
      },
    });
  });

    this.map.on('click', e => {
      // queried results on map
    const result = this.map.queryRenderedFeatures(e.point, {layers:['Point'] }
  );
    if(result.length) {
      // creates a popup instance on popup
      const popup = new mapboxgl.Popup({anchor: 'top-right'});
      const craigslistContent = result[0].properties.description


        console.log(result);




        popup.setLngLat(e.lngLat)
        popup.setHTML(`<h3>${craigslistContent}</h3>More info`);
        popup.addTo(this.map);



        const staredListing1 = document.getElementById('starFav');
              console.log('this my stared listing1:', staredListing1);
              staredListing1.addEventListener('click',() => {

                localStorage.setItem('1', JSON.stringify(result[0].properties.description));
                console.log('end of function');
              });


              // const staredListing2 = document.getElementById('starFav2');
              //       console.log('this my stared listing2:', staredListing2);
              //   staredListing2.addEventListener('click',() => {
              //
              //     localStorage.setItem('2', JSON.stringify(result[1].properties.description));
              //     console.log('end of function2');
              //   });
              //
              //
              //

    }

  });


      }

  componentWillUnmount() {
    this.map.remove();
  }


  render() {
    const style= {
      position: 'absolute',
      height: '90%',
      width: '100%',

    };

    return (
      <div
      style={style} ref={el => this.mapContainer = el}

      />
    );
  }
}



export default Map;
