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
import { ProjectPage } from './ProjectComponents.js';
import Contact from './Contact.js';
import resume from './resume.pdf';
import { HashRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

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

var appStyle = {
    backgroundColor: "#F8F9FA"
};

class MainNavbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }
    render() {
      return (
        <React.Fragment>
        <Navbar color="dark" dark expand="md">
          <LinkContainer to="/"><NavbarBrand><FontAwesomeIcon icon="home" /> Jonathan Guiang</NavbarBrand></LinkContainer>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <LinkContainer to="/about">
                <NavItem>
                  <NavLink href="/about"><FontAwesomeIcon icon="user-astronaut" /> About</NavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/gallery">
                <NavItem>
                  <NavLink href="/gallery"><FontAwesomeIcon icon="images" /> Gallery</NavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/projects">
                <NavItem>
                  <NavLink href="/projects"><FontAwesomeIcon icon="code" /> Projects</NavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/contact">
                <NavItem>
                  <NavLink href="/contact"><FontAwesomeIcon icon="envelope" /> Contact</NavLink>
                </NavItem>
              </LinkContainer>
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
    render() {
        return (
            <Router>
              <div style={appStyle}>
                <MainNavbar/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/gallery" component={Gallery} />
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/projects/:name" component={ProjectPage}/>
                <Route path="/contact" component={Contact}/>
              </div>
            </Router>
        );
    }
}

export default App;
