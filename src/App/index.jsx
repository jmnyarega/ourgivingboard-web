import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Dashboard/Home";
import Payment from "./Payment";
import Gift from "./Dashboard/Gift";
import Login from "./Login";
import Invite from "./Invitation";
import Recover from "./RecoverPassword";
import "../styles/index.scss";

const App = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/invite" component={Invite} />
    <Route path="/payment" component={Payment} />
    <Route path="/gift" component={Gift} />
    <Route path="/recover" component={Recover} />
    <Route exact path="/" component={Login} />
  </Switch>
);

export default App;
