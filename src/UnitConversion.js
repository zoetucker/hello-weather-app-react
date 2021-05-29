import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showCelsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="UnitConversion">
        <span className="current-temp">{Math.round(props.fahrenheit)}</span>
        <div className="temp-units">
          <span className="fahrenheit-unit">
            <a href="/" onClick={convertToFahrenheit}>
              °F |
            </a>
          </span>
          <span className="celsius-unit">
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="UnitConversion">
        <span className="current-temp">{Math.round(showCelsius())}</span>
        <div className="temp-units">
          <span className="fahrenheit-unit">
            <a href="" onClick={convertToFahrenheit}>
              °F |
            </a>
          </span>
          <span className="celsius-unit">
            <a href="" onClick={convertToCelsius}>
              °C
            </a>
          </span>
        </div>
      </div>
    );
  }
}
