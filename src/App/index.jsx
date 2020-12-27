import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import { Payment } from "./Payment";
import Login from "./Login";
import Invite from "./Invitation";
import "../styles/index.scss";

const App = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/invite" component={Invite} />
    <Route path="/payment" component={Payment} />
    <Route exact path="/" component={Login} />
  </Switch>
);

export default App;
