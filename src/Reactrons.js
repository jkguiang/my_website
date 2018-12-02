import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Container, Button } from 'reactstrap';
import { Clock, Greeting } from './widgets.js'

class Imagetron extends Component {
    render() {
        var imgStyle = {
            background: `#000 url(${this.props.imgURL}) center center`,
            backgroundSize: "cover"
        };
        return (
          <React.Fragment>
            <Jumbotron className="jumbotron jumbotron-billboard">
              <div className="img" style={imgStyle}></div>
              <Container>
                {(this.props.title) ? <h4 className="display-3">{this.props.title}</h4> : <Greeting />}
                {(this.props.toggleClock) ? <Clock /> : null}
                <p className="lead text-muted" style={{textShadow: "0 0 1px rgba(0,0,0,0.2)"}}>{this.props.text}</p>
                <Button href={this.props.buttonURL}>{(this.props.buttonText) ? this.props.buttonText : "See More"} &raquo;</Button>
              </Container>
            </Jumbotron>
          </React.Fragment>
        );
    }
}

class Profiletron extends Component {
    render() {
        var imgStyle = {
            background: `#000 url(${this.props.imgURL}) center center`,
            backgroundSize: "cover"
        };
        return (
          <React.Fragment>
            <Jumbotron className="jumbotron jumbotron-billboard">
              <div className="img" style={imgStyle}></div>
              <Container className="text-center">
                <img src={this.props.profPic} width="200" height="200" className="img-thumbnail" alt="missing" />
              </Container>
            </Jumbotron>
          </React.Fragment>
        );
    }
}

class Centertron extends Component {
    render() {
        var headerStyle = {
            paddingTop: '75px',
            paddingBottom: '50px',
            backgroundColor: '#fff'
        };
        return (
          <React.Fragment>
            <div className="text-center" style={headerStyle}>
              <h2 className="display-3">{this.props.title}</h2>
              <p className="lead text-muted">{this.props.text}</p>
            </div>
          </React.Fragment>
        );
    }
}

export {
  Imagetron,
  Profiletron,
  Centertron  };
