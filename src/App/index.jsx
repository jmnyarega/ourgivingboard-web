import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Dashboard/Home";
import Payment from "./Payment";
import GiftPayment from "./Dashboard/GiftPayment";
import Login from "./Login";
import Invite from "./Invitation";
import Recover from "./RecoverPassword";
import Community from "./Dashboard/Admin/Community";
import FundBoard from "./Dashboard/Admin/FundBoard";
import "../styles/index.scss";

const App = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/invite/:invitation_token" component={Invite} />
    <Route path="/payment" component={Payment} />
    <Route path="/gift-payment" component={GiftPayment} />
    <Route path="/recover" component={Recover} />
    <Route path="/community" component={Community} />
    <Route path="/board" component={FundBoard} />
    <Route exact path="/" component={Login} />
  </Switch>
);

export default App;
