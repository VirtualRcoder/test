import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Slideshow from "./components/Slideshow/Slideshow";
import Body from "./components/Body/Body";
import Form from "./components/Form/Login Form";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar /><br/><br/><br/>
	<div class='container'>
        <Slideshow /><br/><br/>
       	<Body />
      </div> 	
      </React.Fragment>
    );
  }
}

export default App;


