import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
      <ul>
        <li><FormattedDate date={props.data.date} /></li>
        <li className="description">{props.data.description}</li>
        <li>Feels like: {Math.round(props.data.feels_like)}°C</li>
      </ul>
  
    <div className="row">
    <div className="col-4">
    <div className="clearfix">
      <img 
      src={props.data.icon}
      alt={props.data.description}
      className="float-left" />
    
    <div className="float-left">
    <WeatherTemperature celsius={props.data.temperature} />
    </div>
    
    </div>
    </div>

    <div className="col-3">
      <ul>
        <li>Min temp: {Math.round(props.data.temp_min)}°C</li>
        <li>Max temp: {Math.round(props.data.temp_max)}°C</li>
      </ul>
    </div>
    <div className="col-3">
      <ul>
        <li>Pressure: {Math.round(props.data.pressure)}hPa</li>
        <li>Humidity: {Math.round(props.data.humidity)}%</li>
        <li>Wind: {Math.round(props.data.wind)}km/h</li>
      </ul>
    </div>
    </div>
    </div>
  );
}