import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Dashboard/Home";
import Invite from "./Invitation";

import GiftOrder from "./Dashboard/GiftPayment/Order";
import GiftCheckout from "./Dashboard/GiftPayment/Checkout";

import Preload from "./Dashboard/Preload";
import PreloadCheckout from "./Dashboard/Preload/Checkout";

import FoundationGifting from "./Dashboard/FoundationGifting";
import FoundationCheckout from "./Dashboard/FoundationGifting/Checkout";

import Payment from "./Payment";
import Community from "./Dashboard/Admin/Community";
import CommunityStats from "./Dashboard/CommunityStats";
import FundBoard from "./Dashboard/Admin/FundBoard";
import WaitingList from "./Dashboard/WaitingList";
import ActiveBoards from "./Dashboard/ActiveBoards";

import Login from "./Login";
import Recover from "./RecoverPassword";

import NotFound from "./NotFound";
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
    <Route path="/board" component={FundBoard} />

    {/* enter board  */}
    <Route path="/gift-order" component={GiftOrder} />
    <Route path="/gift-checkout" component={GiftCheckout} />

    {/* preload gift */}
    <Route path="/preload-gift" component={Preload} />
    <Route path="/preload-checkout" component={PreloadCheckout} />

    {/* preload gift */}
    <Route path="/foundation-gift" component={FoundationGifting} />
    <Route path="/foundation-checkout" component={FoundationCheckout} />

    <Route path="/waiting-list" component={WaitingList} />

    <Route path="/community" component={Community} />
    <Route path="/board" component={FundBoard} />

    <Route path="/recover" component={Recover} />
    <Route exact path="/" component={Login} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
