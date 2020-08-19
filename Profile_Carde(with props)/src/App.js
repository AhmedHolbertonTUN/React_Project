import React from "react";
import "./styles.css";
import Profile from "./profile.js";

export default function App() {
  return (
    <div className="App">
      <Profile name="Elon Musk" bio="Elon Reeve Musk FRS (born June 28, 1971) is an engineer, industrial designer, 
technology entrepreneur and philanthropist. He is the founder, CEO, CTO and chief designer of SpaceX;
early investor, CEO and product architect of Tesla, founder of The Boring Company; co-founder of Neuralink; 
and co-founder and initial co-chairman of OpenAI." profession="Founder, CEO, lead designer of SpaceX">
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
