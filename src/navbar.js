import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class MainNavbar extends Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Jonathan Guiang</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/about/"><FontAwesomeIcon icon="user-astronaut" /> About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/portfolio/"><FontAwesomeIcon icon="images" /> Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projects/"><FontAwesomeIcon icon="code" /> Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact/"><FontAwesomeIcon icon="envelope" /> Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/jkguiang/my_website"><FontAwesomeIcon icon={['fab', 'github']} /> GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
}
