// import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/scss/bootstrap.scss";
import "./styles.scss";
import { TodoApp } from "./08-useReducer/TodoApp";
// import { HooksApp } from "./HooksApp";

// import "./08-useReducer/intro-reducer.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <HooksApp />
  <TodoApp></TodoApp>
  // </React.StrictMode>
);
