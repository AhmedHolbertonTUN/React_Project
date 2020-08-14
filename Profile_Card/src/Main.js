import React from "react";
import "./styles.css";
import ProfilPhoto from "./profile/ProfilPhoto"
import FullName from "./profile/FullName"
import Address from "./profile/Address"

export default function Main() {
  return (
    <div className="App">
    <div className="card">
<ProfilPhoto />
<FullName />
<Address />
    </div>
    </div>
  );
};
