import React, { Component } from "react";
import logo from "./logo.svg";
import Home from "./components/home";
import PrivateRoute from "./components/PrivateRoute";
import Main_page from "./components/main_page";
import { Switch, Route } from "react-router-dom";
import Game from "./components/game";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_mode: "main",
    };
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <PrivateRoute path="/Main_page">
            <Main_page></Main_page>
          </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Route path="/game" component={Game} />
      </div>
    );
  }
}

export default App;
