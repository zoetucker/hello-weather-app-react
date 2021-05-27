import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-4">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city"
              autoFocus="on"
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
              value="📌 Current Location!"
            />
          </div>
        </div>
      </form>
      <h1>Arlington</h1>
      <div>
        <ul>
          <li>Wednesday 3:45</li>
          <li>Clear Sky</li>
        </ul>
      </div>

      <div className="row">
        <div className="col-6">
          <img
            className="current-icon"
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt="clear-sky"
          />{" "}
          <span className="current-temp">80</span>
          <span className="temp-units">°F | °C</span>
        </div>

        <div className="col-6">
          <div>
            <ul>
              <li>Humidity: 100%</li>
              <li>Wind Speed: 5 mph</li>
            </ul>
          </div>
        </div>

        {/* <div className="row">
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
        </div> */}
      </div>
    </div>
  );
}
