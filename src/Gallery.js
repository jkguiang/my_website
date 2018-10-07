import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { last_update } from './text.js';
import ImageCarousel from './ImageComponents.js';
import { Slidetron, Centertron } from './Reactrons.js';


class Gallery extends Component {
    render() {
        var bodyStyle = {
          paddingTop: '25px',
          backgroundColor: '#F8F9FA'
        };
        return (
            <React.Fragment>
              <Centertron title="Gallery" text="Portfolio of graphic design and photography." />
              <div style={bodyStyle}>
                <Container className="text-center">
                  <ImageCarousel/>
                </Container>
                <Container>
                  <hr />
                  {last_update}
                </Container>
              </div>
            </React.Fragment>
        );
    }
}

export default Gallery;
