import React from "react";
import "./styles.css";
import Profile from "./profile.js";

export default function App() {
  return (
    <div className="App">
      <Profile>
        <img
          className="img"
          src="https://newdaypost.com/wp-content/uploads/2017/09/Elon-Musk-adjusts-his-Martian-plan1.jpg"
          alt="pic"
          height={"400px"}
          width={"350px"}
        />
      </Profile>
    </div>
  );
}
