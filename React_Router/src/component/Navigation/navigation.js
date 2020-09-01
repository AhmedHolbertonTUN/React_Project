import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="sticky">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/Category">
          <li>Category</li>
        </Link>

        <Link to="/Products">
          <li>Products</li>
        </Link>
        <Link to="/admin">
          <li>Admin area</li>
        </Link>
      </ul>
    </div>
  );
}
