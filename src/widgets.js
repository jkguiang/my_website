import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({date: new Date()});
    }
    render() {
        return (
            <h6>It is {this.state.date.toLocaleTimeString()}.</h6>
        );
    }
}

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: this.getGreeting()
        };
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.greet(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    greet() {
        this.setState({
            greeting: this.getGreeting()
        });
    }
    getGreeting() {
        var newTime = (new Date()).getHours();
        if (newTime < 12) {
            return "Good morning.";
        }
        else if (newTime < 5) {
            return "Good afternoon.";
        }
        else {
            return "Good evening.";
        }
    }
    render() {
        return (
            <h4 className="display-3">{this.state.greeting}</h4>
        );
    }
}

export { Clock, Greeting };
