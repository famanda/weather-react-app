import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
       <footer>
          Project coded by {""}
          <a href="https://www.linkedin.com/in/feliciaamanda">
          Felicia Amanda
          </a>
          {""} and is {""}
          <a href="https://github.com/famanda/weather-react-app">
          open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}