import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { communityStats as communityStatsAction } from "../../../actions/communityStats/getCommunityStats";
import { getStat } from "../../../actions/stats";

// components
import SummaryElement from "../SummaryContent";
import Community from "../Community";
import Dashboard from "../index";
import Line from "../../../common/Line";

// hooks
import { useCurrentUser } from "../../../hooks/authentication";

const Home = () => {
  const { user } = useSelector((state) => state?.currentUser);
  const { stat } = useSelector((state) => state?.stat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(communityStatsAction());
    dispatch(getStat());
  }, []);

  useCurrentUser();
  return (
    <Dashboard>
      <div className="dashboard-main">
        <div className="title">{user?.name}</div>
        <div className="dashboard-summary">
          <SummaryElement title="total potential" number={stat?.full_potential} />
          <SummaryElement title="total gifted" number={stat?.total_gifted} />
          <SummaryElement title="net payout" number={stat?.net_payout} actual={stat?.actual_balance}/>
        </div>
        <Line />
        <Community data={[1, 2, 3, 4]} />
      </div>
    </Dashboard>
  );
};

export default Home;
