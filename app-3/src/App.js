import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      food: ["pizza", "hamburgers", "canelones", "apples", "sandwiches"]
    };
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let foodToDisplay = this.state.foods
    .filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>};
    });
    
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
      </div>
    );
  }
}

export default App;
