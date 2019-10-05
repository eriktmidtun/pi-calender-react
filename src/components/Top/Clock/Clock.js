import React, { Component } from 'react';
import "./Clock.css";

class Clock extends Component {
  constructor(){
    super()
    this.state = {
      time: this.getTime()
    }
  }

  getTime() {
    let now = new Date();
    return this.checkTime(now.getHours()) + ":" + this.checkTime(now.getMinutes())
  }

  //adds zero in front of numbers < 10
  checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: this.getTime() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  
  render() {
    return (
      <div className="clock">
        {this.state.time}
      </div>
    );
  }
}

export default Clock;