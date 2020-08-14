import React from "react";
import profil from "../img/circle-cropped.png";

export default function Photo() {
  return (
    <div>
      <img src={profil} alt="profil" style={{ width: "50%" }} />
    </div>
  );
}
