import React from "react";
import "./style_home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="acceuil">
      <div className="demoFont">
        NEW
        <br />
        ARRIVAL
        <br />
        UP TO <b>30%</b> OFF
        <br />
        <Link to="/Products">
          <button className="myButton">SHOP COLLECTION</button>
        </Link>
      </div>
    </div>
  );
}
