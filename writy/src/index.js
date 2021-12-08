import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet/style.css";
import App from "./App";
import { BrowserRouter, Route } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
