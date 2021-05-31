import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Daily-forecast">Tues</div>
          <WeatherIcon code="01d" size={36} />
          <div className="Forecast-temp">
            <span className="max-temp">70 °F</span>
            <span className="min-temp">50 °F</span>
          </div>
        </div>
      </div>
    </div>
  );
}
