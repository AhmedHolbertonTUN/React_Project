import React from "react";
import PropTypes from "prop-types";

export default function Profile(props) {
  function handleClick() {
    alert(`${props.name}`);
  }
  return (
    <div>
      <div className="flex-container">
        <div onClick={handleClick} className="flex-container" id="demo">
          {props.children}
          <div>
            <h2 style={{ color: "#FF009D" }}>{props.name}</h2>
            <p className="title">Bio</p>
            <p style={{ fontSize: "15px" }}>{props.bio}</p>
            <p className="title">Profession</p>
            <p style={{ fontSize: "15px" }}>{props.profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.defaultProps = {
  name: "Elon Musk",
  bio:
    "Elon Musk is a South African-born American entrepreneur and businessman who founded X.com in 1999 (which later became PayPal), SpaceX in 2002 and Tesla Motors in 2003. Musk became a multimillionaire in his late 20s when he sold his start-up company, Zip2, to a division of Compaq Computers.",
  profession: "Engineer, Industrial designer, Entrepreneur"
};

Profile.propType = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired
};
