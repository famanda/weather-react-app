import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Tuesday 12:00",
      description: response.data.weather[0].description,
      feels_like: response.data.main.feels_like,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      temp_min: response.data.main.temp_min,
      temp_max: response.data.main.temp_max,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
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
      
      <h1>{weatherData.city}</h1>
      <ul>
        <li>Last updated: {weatherData.date}</li>
        <li className="description">{weatherData.description}</li>
        <li>Feels like: {Math.round(weatherData.feels_like)}°C</li>
      </ul>
  
    <div className="row">
    <div className="col-4">
    <div className="clearfix">
      <img 
      src={weatherData.icon}
      alt={weatherData.description}
      className="float-left" />
      <div className="float-left">
        <strong className="temperature">{Math.round(weatherData.temperature)}</strong>
          <span className="unit">°C</span>
          <span className="unit">| °F</span>
      </div>
    </div>
    </div>

    <div className="col-3">
      <ul>
        <li>Min temp: {Math.round(weatherData.temp_min)}°C</li>
        <li>Max temp: {Math.round(weatherData.temp_max)}°C</li>
      </ul>
    </div>
    <div className="col-3">
      <ul>
        <li>Pressure: {Math.round(weatherData.pressure)}hPa</li>
        <li>Humidity: {Math.round(weatherData.humidity)}%</li>
        <li>Wind: {Math.round(weatherData.wind)}km/h</li>
      </ul>
    </div>
    </div>
    </div>
    );
  } else {
  const apiKey = `f2cfad915dcee273a86b45e874d64e09`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
  }
}
