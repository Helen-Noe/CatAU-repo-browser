import React, { Component } from "react";
import Profile from "./Profile";
import Repos from "./Repos";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Profile />
        {/* <Repos /> */}
      </div>
    );
  }
}

export default App;
