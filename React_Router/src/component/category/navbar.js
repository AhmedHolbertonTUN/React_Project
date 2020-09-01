import React from "react";
import "./style_category.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="vertical-menu">
      <Link to="/Category/shoes">
        <a>Shoes</a>
      </Link>
      <Link to="/Category/boots">
        <a>Boots</a>
      </Link>
      <Link to="/Category/footwear">
        <a>Footwear</a>
      </Link>
    </div>
  );
}
