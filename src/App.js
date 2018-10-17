import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{process.env.REACT_APP_API_KEY}</p>
        </header>
      </div>
    );
  }
}

export default App;
