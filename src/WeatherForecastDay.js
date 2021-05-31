import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}°`;
  }

  function minTemp() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="Daily-forecast">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="Forecast-temp">
        <span className="max-temp">{maxTemp()}</span>
        <span className="min-temp">{minTemp()}</span>
      </div>
    </div>
  );
}
