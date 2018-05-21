import React, {Component} from 'react';
  import {Grid, Navbar, NavDropdown, Nav, NavItem, FormGroup, FormControl, Button, MenuItem} from 'react-bootstrap';


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
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
             <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{' '}
            <Button type="submit">Search</Button>
          </Navbar.Form>
          </NavItem>
          <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>About</MenuItem>
            <MenuItem eventKey={3.2}>Saved Listings</MenuItem>
            <MenuItem eventKey={3.3}>Create a Listing</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Login</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      
    );
  }
}

export default NavbarSearch;
