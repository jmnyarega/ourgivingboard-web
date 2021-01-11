import React from "react";
import { useHistory } from "react-router-dom";

const Community = () => {
  const history = useHistory();
  const handleToGift = () => {
    history.push("/gift-payment");
  };
  return (
    <>
      <div className="community-card flex-row-gap-1">
        <div className="element-box">
          <h3 className="label title">Active Boards</h3>
          <p className="element-description">You have {0} active boards</p>
          <button className="btn btn-outline-primary">View All</button>
        </div>
        <div className="element-box">
          <h3 className="label title">Preload Gift</h3>
          <p className="element-description">Increase net pending</p>
          <button className="btn btn-outline-primary">Preload</button>
        </div>
        <div className="element-box">
          <h3 className="label title">Enter Gift</h3>
          <p className="element-description">Gift to board</p>
          <button onClick={handleToGift} className="btn btn-outline-primary">
            Enter
          </button>
        </div>
      </div>
      <div className="community-card flex-row-gap-1">
        <div className="element-box">
          <h3 className="label title">Foundation Gifting</h3>
          <p className="element-description">Foundation gifting</p>
          <button className="btn btn-outline-primary">Gift</button>
        </div>
        <div className="element-box">
          <h3 className="label title">Waiting list</h3>
          <p className="element-description">You are not on any boards.</p>
          <button className="btn btn-outline-primary">Visit Board</button>
        </div>
        <div className="element-box">
          <h3 className="label title">Community Stats</h3>
          <p className="element-description">&nbsp;</p>
          <button className="btn btn-outline-primary">View Stats</button>
        </div>
      </div>
    </>
  );
};

export default Community;
