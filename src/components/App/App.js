import React, {Component} from 'react';
import NavbarSearch from '../Navbar/Navbar';
import Mapboxgl from '../Map/Map';

class App extends Component {

  render() {
    return (
      <div className="sub-house">
        <NavbarSearch />
        <Mapboxgl/>

      </div>
    );
  }
}

export default App;
