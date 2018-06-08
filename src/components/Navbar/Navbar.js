import React, {Component} from 'react';
import {Navbar, Nav, NavItem, FormGroup, FormControl, Button} from 'react-bootstrap';


class NavbarSearch extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Sub House</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={2} href="#">
             <Navbar.Form pullLeft>
            <FormGroup className="search-input-box">
              <FormControl type="text" placeholder="Price" />
            </FormGroup>{' '}
            <Button type="submit">Search</Button>
          </Navbar.Form>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavbarSearch;
