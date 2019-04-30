import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange(value) {
    this.setState({ message: value });
  }

  render() {
    return (
      <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type="text" />
       <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;

{/* <div className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h2>Welcome to React</h2>
</div>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p> */}
