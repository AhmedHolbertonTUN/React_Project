import React from "react";
import Boots from "./boots";
import Shoes from "./shoes";
import Footwear from "./footwear";
import Navbar from "./navbar";
import { Route } from "react-router-dom";

export default function Category() {
  return (
    <div>
      <Navbar />
      <Route path="/Category/boots" component={Boots} />
      <Route path="/Category/shoes" component={Shoes} />
      <Route path="/Category/footwear" component={Footwear} />
    </div>
  );
}
