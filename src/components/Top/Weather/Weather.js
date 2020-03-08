import React, { Component } from 'react';
import "./Weather.css";

const symbolBaseUrl = "http://nrkno.github.io/yr-weather-symbols/png/100/";
class Weather extends Component {

  timestamp( string ) {
    const time = new Date(string);
    return String(time.getHours());
  }


  render() {
    const weather = this.props.forecast;
    const laterCasts = weather.forecast.slice(1);
    return (
      <div className="weather-container">
        <div className={"placename"}>
            <img classname={"img"}
                src={"https://theme.zdassets.com/theme_assets/657817/aa5f9ab188078fbb14b21b7765e12278646ac264.png"}
                alt={"yr.no"}
                width={"25px"}
            />
            { weather.name }
        </div>
        <div className={"temps"}>
            <div className={"currentTemp"}>
                <img classname={"img"}
                    src={symbolBaseUrl+ weather.forecast[0].symbol + ".png"}
                    alt={"weather"}
                    width={"50px"}
                />
                {   
                    //console.log(weather.forecast[0])
                     weather.forecast[0].temperature + "°" 
                }
            </div>
            <div className={ "otherTemps time-intervals" }>
            {
                laterCasts.map( item => {
                    return (
                        <div className={"otherTemp"}>
                            { this.timestamp(item.from) + "-" + this.timestamp(item.to) }
                        </div>
                    )
                }) 
            }
            </div>
            <div className={"otherTemps line"}>
            {
                laterCasts.map( item => {
                    return (
                        <div className={"otherTemp"}>
                            <img classname={"img"}
                                src={symbolBaseUrl + item.symbol + ".png"}
                                alt={"weather"}
                                width={"35px"} />
                            {  item.temperature + "°" }
                        </div>
                    )
                }) 
            }
            </div>
        </div>
      </div>
    );
  }
}

export default Weather;

