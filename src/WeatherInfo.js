import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <span>
            <WeatherIcon code={props.data.weatherIcon} size={70} />
          </span>

          <span className="current-temp">
            {Math.round(props.data.temperature)}
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
              <li>Feels like: {Math.round(props.data.feelLike)} °F</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
