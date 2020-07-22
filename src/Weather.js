import React from "react";
import "./Weather.css";

export default function weather() {
  return(
    <div className="Weather">
      <form>
        <div className="row">
        <div className="col-9">
        <input
          type="search"
          placeholder="Enter a city"
          className="form-control"
          autoFocus="on"
        />
        </div>

        <div className="col-3">
        <input
          type="submit"
          value="Search"
          className="btn btn-primary w-100"
        />
        </div>
        </div>
      </form>
      
      <h1>Toronto</h1>
      <ul>
        <li>Last updated: Tuesday 12:00</li>
        <li>Partly Cloudy</li>
        <li>Feels like: 23°C</li>
      </ul>
  
    <div className="row">
    <div className="col-4">
    <div className="clearfix">
      <img 
      src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
      alt="Partly Cloudy"
      className="float-left" />
      <div className="float-left">
        <strong className="temperature">26</strong>
          <span className="unit">°C</span>
          <span className="unit">{" "}|{" "}°F</span>
      </div>
    </div>
    </div>

    <div className="col-3">
      <ul>
        <li>Min temp: 20°C</li>
        <li>Max temp: 26°C</li>
      </ul>
    </div>
    <div className="col-3">
      <ul>
        <li>Pressure: 0hPa</li>
        <li>Humidity: 0%</li>
        <li>Wind: 0km/h</li>
      </ul>
    </div>

    </div>
    </div>
  );
}