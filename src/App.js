import logo from './logo.svg';
import './App.css';
import React from "react";
import Intro from "./components/Intro";


function App() {
  // const text = useTypingEffect("hi, there", 500);
  
  return (
    <div className="App">
      <div className="content">
        <Intro></Intro>
      </div>
      <div className="content">

      </div>
    </div>
  );
}

export default App;
