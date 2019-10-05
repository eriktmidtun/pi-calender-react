import React, { Component } from 'react';
import Top from './components/Top/Top';
import Calender from './components/Calender/Calender';
import './App.css';
/* import Iframe from 'react-iframe';
import ReactDOM from 'react-dom'; */

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentCalender: {
        name: "calender1",
        url: "calendar.google"
      }
    }
  }

 /*  componentDidMount() {
    this.focusDiv();
  }

  componentDidUpdate() {
    if(this.state.active)
      this.focusDiv();
  }

  focusDiv() {
    ReactDOM.findDOMNode(Iframe).focus();
  } */

  
  render() {
    return (
      <div className="container">
        <Top name={ this.state.currentCalender.name }/> 
        <Calender />
      </div>
    );
  }
}

export default App;
