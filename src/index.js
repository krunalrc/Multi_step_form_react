import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routers/AppRouter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
