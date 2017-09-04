import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
  handleSelect(eventKey) {
    // event.preventDefault();
    console.log(`selected ${eventKey}`);
  }

  render() {
    return (
      <header>
        <Nav bsStyle="tabs" onSelect={this.handleSelect}>
          <NavDropdown eventKey="1" title={<img src="./swift.png" alt="Dropdown Icon"/>} id="nav-dropdown" noCaret>
            <LinkContainer to="/" activeClassName="none">
              <MenuItem eventKey={1.1} >
                  Countdown
              </MenuItem>
            </LinkContainer>

            <LinkContainer to="/about" activeClassName="none">
              <MenuItem eventKey={1.2}>
                About
              </MenuItem>
            </LinkContainer>

            <MenuItem divider />

            <LinkContainer to="/contact" activeClassName="none">
              <MenuItem eventKey={1.3}>
                Contact
              </MenuItem>
            </LinkContainer>
          </NavDropdown>

          <Navbar.Brand>
            <a href="/">PDX SWIFTS</a>
          </Navbar.Brand>
        </Nav>
      </header>
    )
  }
};

export default Header;
