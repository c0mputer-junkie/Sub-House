import React, {Component} from 'react';
import NavbarSearch from '../Navbar/Navbar';
import Mapbox from '../Map/Map';


class App extends Component {

  render() {
    return (
      <div className="sub-house">
        <NavbarSearch />
        <Mapbox />

      </div>
    );
  }
}

export default App;
