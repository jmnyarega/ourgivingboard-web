import React from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import SummaryContent from "./SummaryContent";
import Board from "./Board";

const Dashboard = () => (
  <div className="dashboard">
    <TopBar />
    <div className="container flex flex-column-gap-6">
      <SideBar />
      <div>
        <div className="dashboard-summary">
          <SummaryContent title="pending" number={500} />
          <SummaryContent title="gifted" number={0} />
          <SummaryContent title="recieved" number={0} />
        </div>
        <Board data={[1, 2, 3, 4]} />
      </div>
    </div>
  </div>
);

export default Dashboard;
