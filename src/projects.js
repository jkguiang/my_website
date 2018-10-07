import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import { ProjectCard, ProjectPage, project_count } from './items.js';
import { last_update } from './text.js';
import { Centertron } from './styles.js';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.handleNav = this.handleNav.bind(this);
        this.state = {
            isPage: false,
            projIndex: -1
        };
    }
    handleNav(value) {
        this.setState({isPage: true, projIndex: value});
    }
    render() {
        var bodyStyle = {
            paddingTop: '25px',
            backgroundColor: '#F8F9FA'
        };
        var divStyle = {
            paddingBottom: '25px'
        }
        if (!this.state.isPage) {
            var cards = [];
            for (var i = 0; i < project_count; i++) {
                cards.push(
                    <div className="col-md-4 d-flex align-items-stretch" style={divStyle}>
                      <ProjectCard onNav={this.handleNav} index={i} />
                    </div>
                );
            }
            return (
                <React.Fragment>
                  <Centertron title="Projects" text="Various open-source programming projects." />
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
                <ProjectPage index={this.state.projIndex} />
            );
        }

    }
}

export default Projects;
