import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    // console.log(forecast);
    return (
      <div className="WeatherForecast ">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col flex justify-sb" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "5baf2o9bt204cc528f4b02b039af34cd";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
