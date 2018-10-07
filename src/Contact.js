import React, { Component } from 'react';
import './App.css';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { home_text, last_update } from './text.js';
import { Centertron } from './styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
    render() {
        var bodyStyle = {
            paddingTop: '25px',
            backgroundColor: '#F8F9FA'
        };
        var textAreaStyle = {
            resize: "none"
        }
        return (
            <React.Fragment>
              <Centertron title="Contact" text="Fill out your contact information with an optional short message and I'll get back to you as soon as possible." />
              <div style={bodyStyle}>
                <Container>
                  <Form>
                    <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="contactName">Name*</Label>
                        <Input type="name" name="name" id="contactName" placeholder="Enter your first and last name..." />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="contactEmail">Email*</Label>
                        <Input type="email" name="email" id="contactEmail" placeholder="Enter a valid email..." />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="contactMessage">Message</Label>
                    <Input type="textarea" name="msg" id="contactMessage" rows="10" style={textAreaStyle} />
                  </FormGroup>
                  <Row form>
                    <Col md={1}>
                      <Button>Send <FontAwesomeIcon icon="paper-plane" /></Button>
                    </Col>
                    <Col md={11}>
                      <FormGroup check>
                        <Input type="checkbox" name="robot" id="robotCheck"/>
                        <Label for="robotCheck" check>I am not a robot.</Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
                <hr />
                {last_update}
              </Container>
            </div>
        </React.Fragment>
        );
    }
}

export default Contact;
