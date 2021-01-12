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
import Preload from "./Dashboard/Preload";
import FoundationGiving from "./Dashboard/FoundationGiving";
import WaitingList from "./Dashboard/WaitingList";
import ActiveBoards from "./Dashboard/ActiveBoards";
import "../styles/index.scss";

const App = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/invite/:invitation_token" component={Invite} />
    <Route path="/payment" component={Payment} />
    <Route path="/gift-payment" component={GiftPayment} />
    <Route path="/active-boards" component={ActiveBoards} />
    <Route path="/recover" component={Recover} />
    <Route path="/community" component={Community} />
    <Route path="/gift-payment" component={FoundationGiving} />
    <Route path="/board" component={FundBoard} />
    <Route path="/preload" component={Preload} />
    <Route path="/waiting-list" component={WaitingList} />
    <Route exact path="/" component={Login} />
  </Switch>
);

export default App;
