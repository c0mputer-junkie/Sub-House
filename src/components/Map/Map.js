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
      // listing
      const listings = this.props.data;

      // const features = listings.map(listing => {
      //     return {
      //         "type": "Feature",
      //         "properties": {
      //           "id": listing.id,
      //           "description": listing.title,
      //           "price": listing.price,
      //           "link": listing.link
      //         }
      //       }
      //     });
      //
      //     console.log('these are my features:', features);

      this.map.addSource('pointer', {
        type: 'geojson',
        data: {
          "type": "FeatureCollection",
          "features": [{
              "type": "Feature",
              "properties": {

                "description": ' <strong>Chill sublet north of DT Oakland with Adorable Pupper 6/18-7/15, $600 <button type="button" id="starFav1" class="btn btn-sm btn-default star"><span class="glyphicon glyphicon-star role="button""></span></button><br/> (oakland west)</strong> <br/> <img src=\"https://images.craigslist.org/00C0C_6xkLq90SNAg_300x300.jpg\"> <a href=\"https://sfbay.craigslist.org/eby/sub/d/chill-sublet-north-of-dt/6616128210.html\" target=\"_blank\" title=\"Opens in a new window\">'

              },
              "geometry": {
                "type": "Point",
                "coordinates": [-122.277167, 37.822345]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": '<strong>Temescal Sublet 6.18 thru 7.14, $850 or $250/week <button type="button" id="starFav2" class="btn btn-sm btn-default star"><span class="glyphicon glyphicon-star"></span></button><br/>(oakland north / temescal)</strong> <br/> <img src=\"https://images.craigslist.org/00a0a_3MpXx3KgFtk_300x300.jpg\"> <a href=\"https://sfbay.craigslist.org/eby/sub/d/temescal-sublet-618-thruor/6614575423.html\" target=\"_blank\" title=\"Opens in a new window\">'
              },
              "geometry": {
                "type": "Point",
                "coordinates": [-122.264695, 37.837659]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": 'End of July sublet - whole 3 bedroom apartment $770 <button type="button" id="starFav" class="btn btn-sm btn-default star"><span class="glyphicon glyphicon-star"></span></button> <br /> (berkeley)</strong> <br/> <img src=\"https://images.craigslist.org/01717_e0kHH4aUHrv_300x300.jpg\"><a href=\"https://sfbay.craigslist.org/eby/sub/d/end-of-july-sublet-whole-3/6609307011.html\" target=\"_blank\" title=\"Opens in a new window\">'

              },
              "geometry": {
                "type": "Point",
                "coordinates": [-122.263700, 37.836100]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": '<strong>Sweet sub-let room in charming house for July only. $625 <button type="button" id="starFav" class="btn btn-sm btn-default star"><span class="glyphicon glyphicon-star"></span></button> <br/>(oakland north/ temescal)</strong> <br/> <img src=\"https://images.craigslist.org/00F0F_6x3V2YrnrPp_300x300.jpg\"> <a href=\"https://sfbay.craigslist.org/eby/sub/d/sweet-sub-let-room-in/6615653348.html\" target=\"_blank\" title=\"Opens in a new window\">'

              },
              "geometry": {
                "type": "Point",
                "coordinates": [-122.281516, 37.8433571]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": '<strong>Quiet Neighborhood, Spacious, Sleeps 4 $600! <button type="button" id="starFav" class="btn btn-sm btn-default star"><span class="glyphicon glyphicon-star"></span></button> <br/> (oakland north / temescal)</strong> <br/> <img src=\"https://images.craigslist.org/00C0C_5Fv1M3hy8zK_300x300.jpg\"> <a href=\" https://sfbay.craigslist.org/eby/sub/d/quiet-neighborhood-spacious/6615408339.html\" target=\"_blank\" title=\"Opens in a new window\">'

              },
              "geometry": {
                "type": "Point",
                "coordinates": [-122.269764, 37.841682]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "description": '<strong>Nice one Bedroom sublet!$925 <button type="button" id= "starFav" class="btn btn-sm btn-default star"><span class="glyphicon glyphicon-star"></span></button><br /> (emeryville) </strong>  <br/> <img src=\"https://images.craigslist.org/00303_gYZt0KS8Z7w_300x300.jpg\"><a href=\"https://sfbay.craigslist.org/eby/sub/d/nice-one-bedroom-sublet/6608860825.html\" target=\"_blank\" title=\"Opens in a new window\">'

              },
              "geometry": {
                "type": "Point",
                "coordinates": [-122.285922, 37.849680]
              }
            }
          ]
        }
      });

      this.map.addLayer({
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
      const result = this.map.queryRenderedFeatures(e.point, {
        layers: ['Point']
      });
      // printed result
      console.log('what is e:',e);



        if (result.length) {
          // creates a popup instance on popup
          const popup = new mapboxgl.Popup({
            anchor: 'top-right'
          });
          const craigslistContent = result[0].properties.description;
          // console.log('result1:', craigslistContent);

          popup.setLngLat(e.lngLat)
          popup.setHTML(`<h3>${craigslistContent}</h3>More info`);
          popup.addTo(this.map);

          //
          // const staredListing = document.getElementById('starFav1');
          // console.log('this my stared listing1:', staredListing);
          //
          // staredListing.addEventListener('click', (e) => {
          //   localStorage.setItem('1', JSON.stringify(result[0].properties.description));
          //   alert('your listing has been saved');
          // });

        }

    });
  };

  componentWillUnmount() {
    this.map.remove();
  }


  render() {

    const style = {
      position: 'absolute',
      height: '90%',
      width: '100%',
    };

    return (
      <div style = {style} ref = {el => this.mapContainer = el}/>
    );
  }
}



 export default Map;
