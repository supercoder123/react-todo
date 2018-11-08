import React, { Component } from "react";
import InputBox from "./components/InputBox";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputBox placeholder="Search" />
        <InputBox placeholder="What is your task?" />
      </div>
    );
  }
}

export default App;
