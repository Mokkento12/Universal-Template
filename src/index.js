import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./App";
import AppProviders from "./context/AppProviders/AppProviders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProviders>
    <App />
  </AppProviders>
);
