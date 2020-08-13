import React, { Component } from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

class App extends Component {
  render() {
    return (
      <div>
        <CounterContainer />
        <hr />
        <TodosContainer />
      </div>
    );
  }
}

export default App;
