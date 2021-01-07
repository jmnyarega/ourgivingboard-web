import React from "react";
import { useHistory } from "react-router-dom";
import SummaryElement from "../SummaryContent";
import Community from "../Community";
import Dashboard from "../index";
import Line from "../../../common/Line";

const email = localStorage.getItem("email");

const Home = () => {
  const history = useHistory();
  if (!email) {
    history.push("/login");
  }
  return (
    <Dashboard>
      <div className="dashboard-main">
        <div className="title">{email}</div>
        <div className="dashboard-summary">
          <SummaryElement title="potential" number={80} />
          <SummaryElement title="total gifted" number={80} />
          <SummaryElement title="pending gift" number={9.3} />
        </div>
        <Line />
        <Community data={[1, 2, 3, 4]} />
      </div>
    </Dashboard>
  );
};

export default Home;
