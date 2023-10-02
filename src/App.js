import logo from './logo.svg';
import './App.css';
import React from "react";

import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer"
import SidebarNav from "./components/SidebarNav";


function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
        {/* <Experience></Experience> */}
        <Projects></Projects>
        <Footer></Footer>
      </div>
      <SidebarNav />
    </div>
  );
}

export default App;
