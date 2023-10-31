// import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/scss/bootstrap.scss";
import "./styles.scss";
// import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";
import { HooksApp } from "./HooksApp"
import { BrowserRouter } from "react-router-dom";

// import "./08-useReducer/intro-reducer.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <HooksApp />
    {/* <TodoApp></TodoApp> */}
    <MainApp></MainApp>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
