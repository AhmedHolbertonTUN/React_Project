import React from "react";
import "./styles.css";
import img1 from './img/image_1.png';
import "./style.css"

export default function App() {
  return (
    <div className="App">
        <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>  
          <h1 className="title red">Ahmed Jarraya</h1>  
          <br />  
          <img src={img1} /> <br /> 
          <img src="/img/image_2.png"/>  
        </div>  
        <video width={320} height={240} controls>  
          <source src="/video/What is JSX.mp4" type="video/mp4" /> 
        </video>
      </div>
    </div>
  );
}
