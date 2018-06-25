import React, {Component} from 'react';
import NavbarSearch from '../Navbar/Navbar';
import Map from '../Map/Map';
import axios from 'axios';

class App extends Component {
  state = {
    response: ''
  }

  componentDidMount() {
    axios.get('/listings', {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => {

      for (let i = 0; i < res.data.length; i++) {
        console.log(res.data[i].id, res.data[i].title, res.data[i].price, res.data[i].location, res.data[i].link);
      }
      this.setState({
        response: res.data
      });
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    return (<div>
      <NavbarSearch />
      <Map data = {this.state.response}/>
      </div>
    );
  }
}

export default App;
