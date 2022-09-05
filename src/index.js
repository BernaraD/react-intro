import React from "react";

//const jwt = require("jwt")

import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./1.useEffect";
// import App from "./2.useEffect"
// import App from "./3.useEffect axios";
import App from "../src/todo/MainToDo"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
