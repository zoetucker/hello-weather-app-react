import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
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
