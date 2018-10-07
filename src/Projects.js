import React, { Component } from 'react';
import './App.css';
import { Container, Col } from 'reactstrap';
import { ProjectCard, ProjectPage, project_count } from './ProjectComponents.js';
import { last_update } from './text.js';
import { Centertron } from './Reactrons.js';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.handleNav = this.handleNav.bind(this);
        this.state = {
            isPage: ((this.props.togglePage) ? true : false),
            projIndex: ((this.props.newIndex) ? this.props.newIndex : -1)
        };
    }
    handleNav(togglePage, newIndex) {
        this.setState({isPage: togglePage, projIndex: newIndex});
    }
    render() {
        var bodyStyle = {
            paddingTop: '25px',
            backgroundColor: '#F8F9FA'
        };
        var colStyle = {
            paddingBottom: '25px'
        };
        if (!this.state.isPage) {
            var cards = [];
            for (var i = 0; i < project_count; i++) {
                cards.push(
                    <Col md={4} className="d-flex align-items-stretch" style={colStyle} key={i}>
                      <ProjectCard onNav={this.handleNav} index={i}/>
                    </Col>
                );
            }
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
        else {
            return(
                <ProjectPage onNav={this.handleNav} index={this.state.projIndex}/>
            );
        }

    }
}

export default Projects;
