import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  console.log(forecast);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecastDay">
              <WeatherForecastDay data={forecast[0]} />

              <div className="WeatherForecast-temperature">
                <span className="WeatherForecast-temperature-max">
                  {Math.round(forecast[0].temperature.maximum)}
                </span>
                <span className="WeatherForecast-temperature-min">
                  {Math.round(forecast[0].temperature.minimum)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = props.city;
    let apiKey = `331fct734c14fe46300adod3e6c6aacb`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
