import React from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import SummaryContent from "./SummaryContent";
import Community from "./Community";

const Dashboard = () => (
  <div className="dashboard">
    <TopBar />
    <div className="container flex flex-column-gap-6">
      <SideBar />
      <div className="dashboard-main">
        <div className="dashboard-summary">
          <SummaryContent title="net pending" number={9.30} />
          <SummaryContent title="total gifted" number={80} />
          <SummaryContent title="total potential" number={80} />
          <SummaryContent title="active boards" number={4} />
        </div>
        <Community data={[1, 2, 3, 4]} />
      </div>
    </div>
  </div>
);

export default Dashboard;
