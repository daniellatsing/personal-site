import logo from './logo.svg';
import './App.css';
import React from "react";

import Intro from "./components/Intro";
import About from "./components/About";


function App() {
  
  return (
    <div className="App">
      <div className="content">
        <Intro></Intro>
        <About></About>
      </div>
      <div className="content">

      </div>
    </div>
  );
}

export default App;
