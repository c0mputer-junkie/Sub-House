import React, {Component} from 'react';

class Users extends Component {
  constructor(props){
    super(props);
    this.name = 'ashley'
  }
  render() {
    return (
      <div> hello {this.name}</div>
    );
  }
}

export default Users;
