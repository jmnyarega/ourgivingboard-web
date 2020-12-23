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
          <SummaryContent title="pending" number={70} />
          <SummaryContent title="gifted" number={10} />
          <SummaryContent title="recieved" number={0} />
        </div>
        <Community data={[1, 2, 3, 4]} />
      </div>
    </div>
  </div>
);

export default Dashboard;
