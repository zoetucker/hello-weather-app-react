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
            <span href="#" onClick={convertToFahrenheit}>
              °F |
            </span>
          </span>
          <span className="celsius-unit">
            <span href="#" onClick={convertToCelsius}>
              °C
            </span>
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
            <span className="units" href="#" onClick={convertToFahrenheit}>
              °F |
            </span>
          </span>
          <span className="celsius-unit">
            <span className="units" href="#" onClick={convertToCelsius}>
              °C
            </span>
          </span>
        </div>
      </div>
    );
  }
}
