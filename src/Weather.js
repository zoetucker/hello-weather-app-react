import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      weatherIcon: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
      temperature: response.data.main.temp,
      feelLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "f530d75c7e8984e88ff649a70bb0bf68";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-4">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
                onChange={updateCityChange}
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

        <WeatherInfo data={weatherData} />

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
    search();
    return "Loading forecast ...";
  }
}
