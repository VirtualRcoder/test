import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import Form from "./components/Form/Form"
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Body/>
        <Form/>
      </React.Fragment>
    );
  }
}

export default App;

