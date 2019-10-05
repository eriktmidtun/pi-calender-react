import React, { Component } from 'react';
import "./Weather.css";

class Weather extends Component {
  constructor(){
    super()
    this.state = {
        placename: "Place",
        now: 4,
        temp: {
            "0" : {
                time: "18-00",
                temp: 3
            },
            "1" : {
                time: "00-06",
                temp: -1
            },
            "2" : {
                time: "06-12",
                temp: -2
            },
            "3" : {
                time: "12-18",
                temp: -4
            }
        }
    }
  }
  render() {
    return (
      <div className="weather-container">
        <div className={"placename"}>
            <img classname={"img"}
                src={"https://theme.zdassets.com/theme_assets/657817/aa5f9ab188078fbb14b21b7765e12278646ac264.png"}
                alt={"yr.no"}
                width={"25px"}
            />
            { this.state.placename }
        </div>
        <div className={"temps"}>
            <div className={"currentTemp"}>
                <img classname={"img"}
                    src={"http://yr.github.io/weather-symbols/png/100/01d.png"}
                    alt={"weather"}
                    width={"50px"}
                />
                { this.state.now + "°" }
            </div>
            <div className={"otherTemps time-intervals"}>
                <div className={"otherTemp"}>
                    { this.state.temp[0].time  }
                </div>
                <div className={"otherTemp"}>
                    { this.state.temp[1].time }
                </div>
                <div className={"otherTemp"}>
                    { this.state.temp[2].time } 
                </div>
                <div className={"otherTemp"}>
                    { this.state.temp[3].time }
                </div>
            </div>
            <div className={"otherTemps line"}>
                <div className={"otherTemp"}>
                    <img classname={"img"}
                        src={"http://yr.github.io/weather-symbols/png/100/01n.png"}
                        alt={"weather"}
                        width={"35px"}
                    />
                    { this.state.temp[0].temp + "°" }
                </div>
                <div className={"otherTemp"}>
                    <img classname={"img"}
                        src={"http://yr.github.io/weather-symbols/png/100/01n.png"}
                        alt={"weather"}
                        width={"35px"}
                    />
                    { this.state.temp[1].temp + "°" }
                </div>
                <div className={"otherTemp"}>
                    <img classname={"img"}
                        src={"http://yr.github.io/weather-symbols/png/100/01d.png"}
                        alt={"weather"}
                        width={"35px"}
                    />
                    { this.state.temp[2].temp + "°" } 
                </div>
                <div className={"otherTemp"}>
                    <img classname={"img"}
                        src={"http://yr.github.io/weather-symbols/png/100/02d.png"}
                        alt={"weather"}
                        width={"35px"}
                    />
                    { this.state.temp[3].temp + "°" }
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Weather;

