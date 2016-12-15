import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import { IndexLink, Link } from 'react-router'
import logo from '../logos/kci-blue-small.png';
import './HeaderNav.css';

class HeaderNav extends Component {
  render() {
    return (
        <Navbar fixedTop fluid>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/page/home">
                  <img className="img-responsive" src={logo} alt="Keystone Certifications" />
                  <strong className="hidden-xs hidden-sm hidden-md hidden-lg">Keystone Certifications, Inc.</strong>
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem href="/next">Next</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
    );
  }
}

export default HeaderNav;
