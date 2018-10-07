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

export default Clock;
