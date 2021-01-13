import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Dashboard/Home";
import Payment from "./Payment";
import Invite from "./Invitation";
import GiftOrder from "./Dashboard/GiftPayment/Order";
import GiftCheckout from "./Dashboard/GiftPayment/Checkout";
import Preload from "./Dashboard/Preload";
import FoundationGiving from "./Dashboard/FoundationGiving";
import Login from "./Login";
import Recover from "./RecoverPassword";
import Community from "./Dashboard/Admin/Community";
import CommunityStats from "./Dashboard/CommunityStats";
import FundBoard from "./Dashboard/Admin/FundBoard";
import WaitingList from "./Dashboard/WaitingList";
import ActiveBoards from "./Dashboard/ActiveBoards";
import "../styles/index.scss";

const App = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/invite/:invitation_token" component={Invite} />
    <Route path="/payment" component={Payment} />
    <Route path="/community-stats" component={CommunityStats} />
    <Route path="/active-boards" component={ActiveBoards} />
    <Route path="/recover" component={Recover} />
    <Route path="/community" component={Community} />
    <Route path="/gift-payment" component={FoundationGiving} />
    <Route path="/board" component={FundBoard} />

    {/* enter board  */}
    <Route path="/gift-order" component={GiftOrder} />
    <Route path="/gift-checkout" component={GiftCheckout} />

    <Route path="/preload" component={Preload} />
    <Route path="/waiting-list" component={WaitingList} />
    <Route path="/foundation" component={FoundationGiving} />

    <Route path="/community" component={Community} />
    <Route path="/board" component={FundBoard} />

    <Route path="/recover" component={Recover} />
    <Route exact path="/" component={Login} />
  </Switch>
);

export default App;
