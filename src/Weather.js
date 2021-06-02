import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForcast";

import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      weatherIcon: response.data.weather[0].icon,
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

  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getCoordinates);
  }

  function getCoordinates(position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    let apiKey = "f530d75c7e8984e88ff649a70bb0bf68";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiurl).then(handleResponse);
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
                onClick={getLocation}
              />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading forecast ...";
  }
}
