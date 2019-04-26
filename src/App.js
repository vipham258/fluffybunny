import React, { Component } from "react";
import UserOutput from "./User/UserOutput";
import "./App.css";
import "./User/UserOutput.css";
import UserInput from "./User/UserInput";

class App extends Component {
  state = {
    userName: ["KingBear", "QueenBear", "SmallBear"]
  };

  changeUserNameHandle = event => {
    this.setState({
      userName: ["KingBear", "QueenBear", event.target.value]
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };
    return (
      <div className="App">
        <UserInput style={style} changed={this.changeUserNameHandle} />
        <UserOutput name={this.state.userName[0]} />
        <UserOutput name={this.state.userName[1]} />
        <UserOutput name={this.state.userName[2]} />
      </div>
    );
  }
}

export default App;
