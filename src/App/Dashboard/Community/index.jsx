import React from "react";

const Community = () => {
  const handleGift = () => {
    location.href="/#/gift-order";
    location.reload();
  };
  const handlePreload = () => {
    location.href="/#/preload";
    location.reload();
  };
  const handleFundationGift = () => {
    location.href="/#/foundation-gift";
    location.reload();
  };
  const handleWaitingList = () => {
    location.href="/#/waiting-list";
    location.reload();
  };
  const handleActiveBoards = () => {
    location.href="/#/active-boards";
    location.reload();
  };
  const handleCommunityStats = () => {
    location.href="/#/community-stats";
    location.reload();
  };
  return (
    <>
      <div className="community-card flex-row-gap-1">
        <div className="element-box">
          <h3 className="label title">Active Boards</h3>
          <p className="element-description">You have {0} active boards</p>
          <button className="btn btn-outline-primary" onClick={handleActiveBoards}>View All</button>
        </div>
        <div className="element-box">
          <h3 className="label title">Preload Gift</h3>
          <p className="element-description">Increase net pending</p>
          <button className="btn btn-outline-primary" onClick={handlePreload}>
            Preload
          </button>
        </div>
        <div className="element-box">
          <h3 className="label title">Enter Gift</h3>
          <p className="element-description">Gift to board</p>
          <button onClick={handleGift} className="btn btn-outline-primary">
            Enter
          </button>
        </div>
      </div>
      <div className="community-card flex-row-gap-1">
        <div className="element-box">
          <h3 className="label title">Foundation Gifting</h3>
          <p className="element-description">Foundation gifting</p>
          <button className="btn btn-outline-primary" onClick={handleFundationGift}>Gift</button>
        </div>
        <div className="element-box">
          <h3 className="label title">Waiting list</h3>
          <p className="element-description">You are not on any boards.</p>
          <button className="btn btn-outline-primary" onClick={handleWaitingList}>
            Visit Board
          </button>
        </div>
        <div className="element-box">
          <h3 className="label title">Community Stats</h3>
          <p className="element-description">&nbsp;</p>
          <button className="btn btn-outline-primary" onClick={handleCommunityStats}>
            View Stats
          </button>
        </div>
      </div>
    </>
  );
};

export default Community;
