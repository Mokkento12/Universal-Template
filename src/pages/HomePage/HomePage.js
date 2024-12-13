import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [message, setMessage] = useState("Welcome to our website!");
  const [weather, setWeather] = useState(null);

  const changeMessage = () => {
    setMessage("Thank you for visiting!");
  };

  useEffect(() => {
    // Пример API-запроса (можно использовать любой публичный API, например, погоды)
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=d6f2689e6eaf6785ebf5e4883c8ad7bc"
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => console.log("Error fetching weather data:", error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <p>This is a universal React project starter template.</p>
      <button onClick={changeMessage}>Change message!</button>
      <h2>Weather Info</h2>
      {weather ? (
        <div>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default HomePage;
