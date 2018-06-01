import React, {Component} from 'react';
import NavbarSearch from '../Navbar/Navbar';
import Map from '../Map/Map';
import axios from 'axios';

class App extends Component {
  state = {
    response: ''
  }

  componentDidMount() {

    axios.get('/search/title', {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => {
       //this.setState({response: res.data.express})
       for(let i =0; i < res.data.length; i++) {
        console.log(res.data[i].title, res.data[i].price, res.data[i].location,res.data[i].link);
       }

    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <NavbarSearch />
        <Map />
      </div>
    );
  }
}

export default App;
