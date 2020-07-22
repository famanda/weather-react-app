import React from "react";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  
  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

  function icon() {
    let icon = props.data.weather[0].icon;
    return (
      <div className="clearfix">
      <img 
      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      alt="description"
      className="float-left" />
      </div>
    );
    
  }
  return (
    <div className="WeatherForecastPreview col">
      {hours()}
      {icon()}
      {temperature()}
    </div>
  );
  }

