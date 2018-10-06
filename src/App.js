import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faEnvelope,
  faImages,
  faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { Jumbotron, Container } from 'reactstrap';
import ProjectCard from './projects.js';
import MainNavbar from './navbar.js';
import home_desc from './text.js';

// Load icons
library.add(
  fab,
  faCode,
  faEnvelope,
  faImages,
  faUserAstronaut  );

class App extends Component {
  render() {
    return (
    <div>
      <MainNavbar />
      <Jumbotron fluid>
        <Container>
          <h1 className="display-3">Hello.</h1>
          <p className="lead">{home_desc}</p>
        </Container>
      </Jumbotron>
      <Container>
      <h2>Featured Content</h2>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <ProjectCard index={1} />
        </div>
        <div className="col-md-4">
          <ProjectCard index={1} />
        </div>
        <div className="col-md-4">
          <ProjectCard index={1} />
        </div>
      </div>
      <hr />
      <p className="text-muted">Last Updated October 6<sup>th</sup>, 2018</p>
      </Container>
    </div>
    );
  }
}

export default App;
