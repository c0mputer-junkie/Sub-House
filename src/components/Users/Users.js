import React, {Component} from 'react';



function userInfo(first_name, last_name, email) {
  return {
    first_name: first_name,
    last_name: last_name,
    email: email
  }
};

var post = userInfo('mr chow', 'lee', 'clee@gmail.com');


class User extends Component {

  render() {
    return (
      <div> `${post}` </div>

    );
  }
}
