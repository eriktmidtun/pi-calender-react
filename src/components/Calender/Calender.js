import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Iframe from "react-iframe";
import IframeWrapper from "./IframeWrapper"
import "./Calender.css";

class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "bm8ubm9yd2VnaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t"
    };
    this.iframeRef = React.createRef();
  }

  componentDidUpdate() {
    console.log(this.iframeRef.current.contentWindow.document);
    this.iframeRef.current.contentWindow.document.focus();
    /* const frame = this.iframeRef;
    console.log(frame.contentWindow.focus()); */
    /* iframe.contentWindow.focus(); */
    /* iframe.contentWindow.focus(); */
  }

  makeURL = () => {
    return (
      "https://calendar.google.com/calendar/embed?height=1000&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FOslo&amp;src" +
      this.state.url +
      "&amp;color=%237986CB"
    );
  };

  render() {
    return (
      <Fragment>
      <iframe 
          src="https://calendar.google.com/calendar/embed?wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FOslo&amp;src=bm8ubm9yd2VnaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
          width="100%"
          height="100%"
          className="iframe"
          ref={this.iframeRef}
          />
        {/* <Iframe
          src="https://calendar.google.com/calendar/embed?wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FOslo&amp;src=bm8ubm9yd2VnaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
          width="100%"
          height="100%"
          id="calender"
          className="iframe"
          display="initial"
          frameBorder="0"
          position="relative"
          ref={(node) => {this.iframeRef = node}}
        /> */}
      </Fragment>
    );
  }
}

export default Calender;

/* import React, { Component, Fragment } from "react";
import Frame from "iframe-react";
import "./Calender.css";

class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "bm8ubm9yd2VnaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t"
    };
    this.iframeRef = React.createRef();
  }

  componentDidMount() {
    const iframe = this.iframeRef;
  }

  makeURL = () => {
    return (
      "https://calendar.google.com/calendar/embed?height=1000&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FOslo&amp;src" +
      this.state.url +
      "&amp;color=%237986CB"
    );
  };

  render() {
    return (
      <Fragment>
        <Frame
          src="https://calendar.google.com/calendar/embed?wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FOslo&amp;src=bm8ubm9yd2VnaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
          documentRef={this.iframeRef}
        />
      </Fragment>
    );
  }
}

export default Calender;
 */