import React, { Component } from 'react';
import "./Clock.css";

class Clock extends Component {
  constructor(){
    super()
    this.state = {
      secs : true,
      time: this.getTime(this.secs),
      
    }
  }

  getTime(secs) {
    let now = new Date();
    const s = secs ? ":" + this.checkTime(now.getSeconds()) : "";
    return this.checkTime(now.getHours()) + ":" + this.checkTime(now.getMinutes()) + s
  }

  //adds zero in front of numbers < 10
  checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: this.getTime(this.state.secs) }), 1000);
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