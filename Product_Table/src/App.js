import React from "react";
import "./styles.css";
import ProductTable from "./ProductTable.js"

let products = [
  {name:"T-shirt",price:35,category:"Clothes"},
  {name:"Apple watch",price:523,category:"Electronics"},
  {name:"Microsoft Xbox",price:409,category:"Electronics"},
  {name:"Jacket",price:105,category:"Clothes"},
  {name:"Jeans",price:69,category:"Clothes"}
];

 function Fill() {
  return (
    products.map(el=><ProductTable name={el.name} price={el.price} category={el.category} />)  
  );
}

export default function App() {
  return (
    <div className="App">
      <h2>Product table</h2>
      <table  className="product" style={{width:'70%'}}>
       <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Category</th>
  </tr>
  <Fill />
  </table>
      </div>
  );
}
