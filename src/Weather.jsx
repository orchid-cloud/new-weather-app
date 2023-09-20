import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Tuesday 12:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
              className="float-left"
            />{" "}
            <div className="flex">
              <span className="temperature">16</span>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 6%</li>
            <li>Humidity: 78%</li>
            <li>Wind: 8km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
