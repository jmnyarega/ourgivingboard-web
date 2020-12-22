import React from "react";
import TopBar from "./TopBar";
import SummaryContent from "./SummaryContent";
import Board from "./Board";

const Dashboard = () => (
  <div>
    <TopBar />
    <div className="container">
      <SummaryContent title="pending" number={500} />
      <SummaryContent title="gifted" number={0} />
      <SummaryContent title="recieved" number={0} />
      <Board data={[1, 2, 3, 4]} />
    </div>
  </div>
);

export default Dashboard;
