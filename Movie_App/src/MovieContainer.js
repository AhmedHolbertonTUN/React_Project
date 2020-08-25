import React from "react";
import "./styles.css";
import MovieList from "./component/movie-list/movie-list";

export default function MovieContainer() {
  return (
    <div className="App container">
      <MovieList />
    </div>
  );
}
