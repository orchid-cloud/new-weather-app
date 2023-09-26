import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }
  if (units === "celsius") {
    return (
      <div className="WeatherTemperature flex">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature flex">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
