import React from "react";

import ActiveBoards from "./ActiveBoards";
import Preload from "./Preload";
import EnterGift from "./EnterGift";
import Foundation from "./Foundation";
import Stat from "./Stat";
import Waiting from "./Waiting";

const Community = () => (
  <>
    <div className="community-card flex-row-gap-1">
      <ActiveBoards />
      <Preload />
      <EnterGift />
    </div>

    <div className="community-card flex-row-gap-1">
      <Foundation />
      <Waiting />
      <Stat />
    </div>
  </>
);

export default Community;
