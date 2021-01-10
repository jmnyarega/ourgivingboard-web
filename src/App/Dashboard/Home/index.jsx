import React from "react";
import SummaryElement from "../SummaryContent";
import Community from "../Community";
import Dashboard from "../index";
import Line from "../../../common/Line";
import { getEmail } from "../../../helpers/localStorage";

const Home = () => {
  const email = getEmail();
  return (
    <Dashboard>
      <div className="dashboard-main">
        <div className="title">{email}</div>
        <div className="dashboard-summary">
          <SummaryElement title="total potential" number={0} />
          <SummaryElement title="total gifted" number={0} />
          <SummaryElement title="net payout" number={0} />
        </div>
        <Line />
        <Community data={[1, 2, 3, 4]} />
      </div>
    </Dashboard>
  );
};

export default Home;
