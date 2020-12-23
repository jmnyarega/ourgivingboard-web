import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Invitation from "./Invitation";
import "../styles/index.scss";


const App = () => (
  <Switch>
    <Route path="/home" component={Dashboard} />
    <Route path="/invite" component={Invitation} />
    <Route exact path="/" component={Login} />
  </Switch>
);

export default App;
