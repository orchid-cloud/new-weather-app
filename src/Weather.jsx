import React, { useState } from "react";
import axios from "axios";
import FormatedDate from "./FormatedDate";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    // console.log(response);
    setWeatherData({
      ready: true,
      city: "New York",
      date: new Date(response.data.time * 1000),
      // city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      humidity: response.data.temperature.humidity,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png",
      description: response.data.condition.description,
    });
  }

  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormatedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="flex">
              <img src={weatherData.iconUrl} alt={weatherData.description} />{" "}
              <div className="flex">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5baf2o9bt204cc528f4b02b039af34cd";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
