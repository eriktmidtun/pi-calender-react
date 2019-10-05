import React, { Component } from 'react';
import "./Photos.css";



class Photos extends Component {
  render() {
    return (
    <div className={"photos"}>
      <img
      className="photos" 
      src={"https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg"} 
      alt="slideshow"/>
    </div>
    );
  }
}

export default Photos;