import React, { Component } from 'react';
import Clock from "./Clock/Clock"
import Weather from "./Weather/Weather"
import Photos from "./Photos/Photos.js"
import "./Top.css";



class Top extends Component {
  render() {
    return (
      <div className="top-container">
        <Photos/>
        <div className="data-container">
          <Clock/>
          <Weather/>
        </div>
        <div className={"currentCalender"}>
          { this.props.name }
        </div>
      </div>
    );
  }
}

export default Top;