import React, { useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [message, setMessage] = useState("Welcome to our website!");

  const changeMessage = () => {
    setMessage("Thank you for visiting!");
  };

  return (
    <div>
      <h1>{message}</h1>
      <p>This is a universal React project starter template.</p>
      <button onClick={changeMessage}>Change message!</button>
    </div>
  );
};

export default HomePage;
