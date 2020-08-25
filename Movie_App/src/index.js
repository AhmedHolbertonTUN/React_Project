import React from "react";
import ReactDOM from "react-dom";

import MovieContainer from "./MovieContainer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <MovieContainer />
  </React.StrictMode>,
  rootElement
);
