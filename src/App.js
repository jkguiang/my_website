import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faEnvelope,
  faImages,
  faUserAstronaut,
  faHome,
  faPaperPlane,
  faCheckCircle,
  faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Home from './Home.js';
import About from './About.js';
import Gallery from './Gallery.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import resume from './resume.pdf';

// Load icons
library.add(
  fab,
  faCode,
  faEnvelope,
  faImages,
  faUserAstronaut,
  faHome,
  faPaperPlane,
  faCheckCircle,
  faFileAlt  );

const contentMap = {
    "home": <Home />,
    "about": <About />,
    "gallery": <Gallery />,
    "projects": <Projects />,
    "contact": <Contact />
};

var appStyle = {
    backgroundColor: "#F8F9FA"
};

class MainNavbar extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    handleClick(evt, value) {
        evt.preventDefault();
        this.props.onNav(value);
    }
    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }
    render() {
      return (
        <React.Fragment>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/" onClick={evt => this.handleClick(evt, "home")}><FontAwesomeIcon icon="home" /> Jonathan Guiang</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/about/" onClick={evt => this.handleClick(evt, "about")}><FontAwesomeIcon icon="user-astronaut" /> About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/gallery/" onClick={evt => this.handleClick(evt, "gallery")}><FontAwesomeIcon icon="images" /> Gallery</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projects/" onClick={evt => this.handleClick(evt, "projects")}><FontAwesomeIcon icon="code" /> Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact/" onClick={evt => this.handleClick(evt, "contact")}><FontAwesomeIcon icon="envelope" /> Contact</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    More
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="https://www.linkedin.com/in/jonathanguiang/">
                      <span><FontAwesomeIcon icon={['fab', 'linkedin']}/> Linkedin</span>
                    </DropdownItem>
                    <DropdownItem href="https://github.com/jkguiang">
                      <span><FontAwesomeIcon icon={['fab', 'github']}/> Github</span>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href={resume}>
                      <span><FontAwesomeIcon icon="file-alt"/> Resumé</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </React.Fragment>
      );
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.handleNav = this.handleNav.bind(this);
        this.state = {
            location: "home"
        };
    }
    handleNav(locale) {
        this.setState({location: locale});
    }
    render() {
        return (
            <div style={appStyle}>
              <MainNavbar onNav={this.handleNav} />
              {contentMap[this.state.location]}
            </div>
        );
    }
}

export default App;
