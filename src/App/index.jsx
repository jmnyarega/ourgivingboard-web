import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import "../styles/index.scss";


const App = () => (
  <Switch>
    <Route path="/home" component={Dashboard} />
    <Route exact path="/" component={Login} />
  </Switch>
);

export default App;
