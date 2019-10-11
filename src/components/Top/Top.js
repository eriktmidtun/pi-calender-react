import React, { Component } from 'react';
import Clock from "./Clock/Clock"
import Weather from "./Weather/Weather"
import Photos from "./Photos/Photos.js"
import "./Top.css";

import forecastfile from './forecast.json'



class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "forecast": forecastfile,
      "weatherMounted": false,
    }
  }

  componentDidMount() {
    console.log(forecastfile);
    this.setState({forecast: forecastfile, 
    weatherMounted: true});
  }

  render() {
    return (
      <div className="top-container">
        <Photos/>
        <div className="data-container">
          <Clock/>
          <Weather forecast={ this.state.forecast }/>
        </div>
        <div className={"currentCalender"}>
          { this.props.name }
        </div>
      </div>
    );
  }
}

export default Top;