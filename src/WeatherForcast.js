import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = `f530d75c7e8984e88ff649a70bb0bf68`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Daily-forecast">Tues</div>
          <WeatherIcon code="01d" size={36} />
          <div className="Forecast-temp">
            <span className="max-temp">70°</span>
            <span className="min-temp">50°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
