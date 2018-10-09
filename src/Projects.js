import React, { Component } from 'react';
import './App.css';
import { Container, Col } from 'reactstrap';
import { ProjectCard, projectNames } from './ProjectComponents.js';
import { last_update } from './text.js';
import { Centertron } from './Reactrons.js';

class Projects extends Component {
    render() {
        var bodyStyle = {
            paddingTop: '25px',
            backgroundColor: '#F8F9FA'
        };
        var colStyle = {
            paddingBottom: '25px'
        };
        var counter = 0;
        const cards = (projectNames).map((name, index) =>
            <Col md={4} className="d-flex align-items-stretch" style={colStyle} key={counter++}>
              <ProjectCard name={name}/>
            </Col>
        );
        return (
            <React.Fragment>
              <Centertron title="Projects" text="Various open-source programming projects."/>
              <div style={bodyStyle}>
                <Container>
                  <div className="row">
                    {cards}
                  </div>
                  <hr />
                  {last_update}
                </Container>
              </div>
            </React.Fragment>
        );

    }
}

export default Projects;
