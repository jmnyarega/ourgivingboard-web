import React from "react";
import { useSelector } from "react-redux";

// components
import SummaryElement from "../SummaryContent";
import Community from "../Community";
import Dashboard from "../index";
import Line from "../../../common/Line";

// hooks
import { useCurrentUser } from "../../../hooks/authentication";

const Home = () => {
  const { user } = useSelector((state) => state?.currentUser);
  useCurrentUser();
  return (
    <Dashboard>
      <div className="dashboard-main">
        <div className="title">{user?.name}</div>
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
