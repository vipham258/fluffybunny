import React, { Component } from "react";
import UserOutput from "./User/UserOutput";
import "./App.css";
import UserInput from "./User/UserInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
