import React from "react";
import "./style.css";

export default function MovieCard(props) {
  return (
    <div className="card-view">
      <div className="card-header">
        <img className="card-header" src={props.img} alt="pic" />
      </div>
      <div className="card-movie-content">
        <div className="card-movie-content-head">
          <p>
            <h3 className="card-movie-title">{props.name}</h3>
          </p>
        </div>
        <div className="card-movie-info">
          <div className="movie-running-time">
            <label>Running time</label>
            <span>{props.time}</span>
          </div>
          <div className="ratings">
            <span>{props.rate}</span>/5
          </div>
        </div>
      </div>
    </div>
  );
}
