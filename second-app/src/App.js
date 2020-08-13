import React, { Component } from "react";
import Home from "./page/Home";
import About from "./page/About";
import Profile from "./page/Profile";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Switch from "react-bootstrap/esm/Switch";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route path="/" component={Home} exact={true}></Route>
        <Route path="/about" component={About}></Route>
        <Switch>
          <Route path="/profile/:name" component={Profile}></Route>
          <Route path="/profile" component={Profile}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
