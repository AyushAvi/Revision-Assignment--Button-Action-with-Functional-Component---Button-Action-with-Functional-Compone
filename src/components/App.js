import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const [number, setNumber] = useState([]);

  const addPara = () =>{
    setNumber([...number, 1])
  }
  return (
    <div id="main">
      <button id="click" onClick={addPara}>Add Para</button>
      {number.map((x)=>{
        return(
          <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
        )
      })}
    </div>
  );
}


export default App;
