import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      description: response.data.weather[0].description,
      weatherIcon: "",
      temperature: response.data.main.temp,
      feelLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-4">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <input
                className="btn btn-success w-100"
                type="submit"
                value="Go!"
              />
            </div>
            <div className="col-6 current-location">
              <input
                className="btn btn-success w-30"
                type="submit"
                value="📌 Current Location"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div>
          <ul>
            <li>Wednesday 3:45</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              className="current-icon"
              src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
              alt="clear-sky"
            />{" "}
            <span className="current-temp">
              {Math.round(weatherData.temperature)}
            </span>
            <div className="temp-units">
              <span className="fahrenheit-unit">
                <a href="">°F |</a>
              </span>
              <span className="celsius-unit">
                <a href="">°C</a>
              </span>
            </div>
          </div>

          <div className="col-6">
            <div className="today-details">
              <ul>
                <li>Feels like: {Math.round(weatherData.feelLike)} °F</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} mph</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="forecast">
          <div className="row">
            <div className="col">
              <h5>Thurs</h5>
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                alt="clear-sky"
              />
              <h4> 70° 80°</h4>
            </div>

            <div className="col">
              <h5>Fri</h5>
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                alt="clear-sky"
              />
              <h4> 70° 80°</h4>
            </div>

            <div className="col">
              <h5>Sat</h5>
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                alt="clear-sky"
              />
              <h4> 70° 80°</h4>
            </div>

            <div className="col">
              <h5>Sun</h5>
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                alt="clear-sky"
              />
              <h4> 70° 80°</h4>
            </div>

            <div className="col">
              <h5>Mon</h5>
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                alt="clear-sky"
              />
              <h4> 70° 80°</h4>
            </div>

            <div className="col">
              <h5>Tue</h5>
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                alt="clear-sky"
              />
              <h4> 70° 80°</h4>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f530d75c7e8984e88ff649a70bb0bf68";
    let city = "Bangkok";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading forecast ...";
  }
}
