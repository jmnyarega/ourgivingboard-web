import React from "react";
import SummaryContent from "../Dashboard/SummaryContent";
import Community from "../Dashboard/Community";
import Dashboard from "../Dashboard";
import Line from "../../common/Line";

const Home = () => (
  <Dashboard>
    <div className="dashboard-main">
      <div className="dashboard-summary">
        <SummaryContent title="potential" number={80} />
        <SummaryContent title="total gifted" number={80} />
        <SummaryContent title="pending gift" number={9.3} />
      </div>
      <Line />
      <Community data={[1, 2, 3, 4]} />
    </div>
  </Dashboard>
);

export default Home;
