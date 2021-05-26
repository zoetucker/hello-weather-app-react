import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-success w-100"
              type="submit"
              value="Go!"
            />
          </div>
        </div>
      </form>
      <h1>Arlington</h1>
      <ul>
        <li>Wednesday 3:45</li>
        <li>Clear Sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt="clear-sky"
          />{" "}
          80 <span>°F</span> | <span>°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 80%</li>
            <li>Wind Speed: 3 mph</li>
          </ul>
        </div>

        <div className="row">
          <div className="col">
            <h5>Thurs</h5>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
              alt="clear-sky"
            />
            <h5>
              <span>70°</span>
              <span>80°</span>
            </h5>
          </div>

          <div className="col">
            <h5>Fri</h5>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="clear-sky"
            />
            <h5>
              <span>70°</span>
              <span>80°</span>
            </h5>
          </div>

          <div className="col">
            <h5>Sat</h5>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
              alt="clear-sky"
            />
            <h5>
              <span>70°</span>
              <span>80°</span>
            </h5>
          </div>

          <div className="col">
            <h5>Sun</h5>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="clear-sky"
            />
            <h5>
              <span>70°</span>
              <span>80°</span>
            </h5>
          </div>

          <div className="col">
            <h5>Mon</h5>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
              alt="clear-sky"
            />
            <h5>
              <span>70°</span>
              <span>80°</span>
            </h5>
          </div>

          <div className="col">
            <h5>Tues</h5>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="clear-sky"
            />
            <h5>
              <span>70°</span>
              <span>80°</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
