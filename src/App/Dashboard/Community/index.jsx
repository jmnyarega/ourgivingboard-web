import React from "react";
import { Link } from "react-router-dom";

const Community = () => (
  <>
    <div className="community-card flex-row-gap-1">
      <div className="element-box">
        <h3 className="label title">Active Boards</h3>
        <p className="element-description">You have {10} active boards</p>
        <button className="btn btn-min btn-link">view all</button>
      </div>
      <div className="element-box">
        <h3 className="label title">Preload Gift</h3>
        <p className="element-description">Increase net pending</p>
        <button className="btn btn-outline-primary">Preload</button>
      </div>
      <div className="element-box">
        <h3 className="label title">Enter Gift</h3>
        <p className="element-description">Gift to board</p>
        <Link to="/gift" className="btn btn-outline-primary">Enter</Link>
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
        <p className="element-description">You are #159 on $80 Gift Board</p>
        <button className="btn btn-outline-primary">Visit Board</button>
      </div>
      <div className="element-box">
        <h3 className="label title">Community Stats</h3>
        <div className="flex-ai-c flex-jc-c flex community-stat">
          <i className="fas fa-chart-bar btn btn-link" aria-hidden="true" />
        </div>
      </div>
    </div>
  </>
);

export default Community;
