import React from "react";
import SummaryContent from "../Dashboard/SummaryContent";
import Community from "../Dashboard/Community";
import Dashboard from "../Dashboard";

const Home = () => (
  <Dashboard>
    <div className="dashboard-main">
      <div className="dashboard-summary">
        <SummaryContent title="net pending" number={9.3} />
        <SummaryContent title="total gifted" number={80} />
        <SummaryContent title="total potential" number={80} />
        <SummaryContent title="active boards" number={4} />
      </div>
      <Community data={[1, 2, 3, 4]} />
    </div>
  </Dashboard>
);

export default Home;
