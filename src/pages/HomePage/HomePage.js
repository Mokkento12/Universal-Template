import React, { useState, useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import useWindowSize from "../../hooks/useWindowSize";
import "./HomePage.css";

const HomePage = () => {
  const [message, setMessage] = useState("Welcome to our website!");
  const [weather, setWeather] = useState(null);
  const [position, setPosition] = useState(() => {
    const initialX = window.innerWidth / 2 - 450; // Центр по ширине сдвинут влево на 50px
    const initialY = window.innerHeight / 2 - 50; // Центр по высоте
    return { x: initialX, y: initialY };
  });

  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const { width, height } = useWindowSize();

  const changeMessage = () => {
    setMessage("Thank you for visiting!");
  };

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=d6f2689e6eaf6785ebf5e4883c8ad7bc"
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => console.log("Error fetching weather data:", error));
  }, []);

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Проверка: только левая кнопка мыши
    e.preventDefault(); // Отменяем выделение текста при клике
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });

    // Добавляем обработчики на документ
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);

    // Сохраняем позицию в localStorage
    localStorage.setItem("widgetPosition", JSON.stringify(position));

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div>
      <h1>{message}</h1>
      <p>This is a universal React project starter template.</p>
      <button onClick={changeMessage}>Change message!</button>
      <Slider />
      {weather ? (
        <div
          className="weather-widget"
          style={{ top: `${position.y}px`, left: `${position.x}px` }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}

      <p>Current window size:</p>
      <p>
        Width: {width}px, Height: {height}px
      </p>
    </div>
  );
};

export default HomePage;
