import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Asegúrate de tener este archivo en `src`. Si no lo necesitas, omítelo.
import App from "./App";

// Renderiza la aplicación principal en el div con el id "root" en `public/index.html`.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
