import React, { Component } from 'react';
import './App.css';
import { Container, Col, Row, Button, Form, FormGroup, FormFeedback, Label, Input } from 'reactstrap';
import { last_update } from './text.js';
import { Centertron } from './Reactrons.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.state = {
            isChecked: false,
            goodName: false,
            goodEmail: false,
            isInit: true
        };
    }
    handleCheck(evt) {
        if (evt.target.id === "notRobot") {
            this.setState(state => ({
              isChecked: !state.isChecked,
              isInit: false
            }));
        }
        else {
            this.setState(state => ({
              isChecked: false,
              isInit: false
            }));
        }
    }
    handleInput(evt) {
        var thisID = evt.target.id;
        var thisValue = evt.target.value;
        if (thisID === "contactName") {
            var splitName = thisValue.split(" ");
            var fullName = (splitName.length >= 2);
            for (var i = 0; i < splitName.length; i++) {
                var validLength = (splitName[i].length > 0);
                var validChars = (splitName[i].indexOf("@") < 0);
                if (!(fullName && validLength && validChars)) {
                    this.setState({ goodName: false, isInit: false });
                }
            }
            this.setState({ goodName: fullName && validLength && validChars, isInit: false });
        }
        else if (thisID === "contactEmail") {
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.setState({goodEmail: (regex.test(String(thisValue).toLowerCase()))});
        }
    }
    render() {
        var bodyStyle = {
            paddingTop: '25px',
            backgroundColor: '#F8F9FA'
        };
        var textAreaStyle = {
            resize: "none"
        }
        var isGood = (this.state.isChecked && this.state.goodName && this.state.goodEmail);
        return (
            <React.Fragment>
              <Centertron title="Contact" text="Fill out your contact information with your first and last name and an optional short message and I'll get back to you as soon as possible."/>
              <div style={bodyStyle}>
                <Container>
                  <Form action="https://send.pageclip.co/96QTaLZJWfuiRdz05ZSJiITIYlKZReio" method="post">
                    <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="contactName">Name{(this.state.goodName) ? <span className="text-success"> <FontAwesomeIcon icon="check-circle" /></span> : "*"}</Label>
                        <Input type="name" name="name" id="contactName" placeholder="Enter your first and last name..." onChange={this.handleInput} invalid={(this.state.isInit) ? false : !this.state.goodName}/>
                        <FormFeedback><span>Please enter your first <i>and</i> last name</span></FormFeedback>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="contactEmail">Email{(this.state.goodEmail) ? <span className="text-success"> <FontAwesomeIcon icon="check-circle" /></span> : "*"}</Label>
                        <Input type="email" name="email" id="contactEmail" placeholder="Enter a valid email..." onChange={this.handleInput}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="contactMessage">Message</Label>
                    <Input type="textarea" name="msg" id="contactMessage" rows="10" style={textAreaStyle}/>
                  </FormGroup>
                  <Row form>
                    <Col md={1}>
                      <Button color={(isGood) ? "success" : "secondary"} disabled={!isGood}>Send <FontAwesomeIcon icon="paper-plane"/></Button>
                    </Col>
                    <Col md={11}>
                      <FormGroup check inline>
                        <Input type="radio" name="robotCheck" id="isRobot" onClick={this.handleCheck}/>
                        <Label for="robotCheck" check>I am a robot.</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input type="radio" name="robotCheck" id="notRobot" onClick={this.handleCheck}/>
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
