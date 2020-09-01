import React from "react";
import "./style_product.css";
import Product1 from "./product1";
import Product2 from "./product2";
import Product3 from "./product3";
import Product4 from "./product4";
import { Route, Link, Switch } from "react-router-dom";

export default function Products() {
  return (
    <div className="container App">
      <div className="vertical-menu">
        <h3>Products</h3>
        <Link to="/Products/1">NIKE Liteforce Blue Sneakers</Link>
        <Link to="/Products/2">U.S. POLO ASSN. Slippers</Link>
        <Link to="/Products/3">ADIDAS Adispree Running Shoes</Link>
        <Link to="/Products/4">Lee Cooper Mid Sneakers</Link>
      </div>
      <Switch>
        <Route path="/Products/1" component={Product1} />
        <Route path="/Products/2" component={Product2} />
        <Route path="/Products/3" component={Product3} />
        <Route path="/Products/4" component={Product4} />
      </Switch>
    </div>
  );
}
