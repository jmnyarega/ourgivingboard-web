import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { communityStats as communityStatsAction } from "../../../actions/communityStats/getCommunityStats";

// components
import SummaryElement from "../SummaryContent";
import Community from "../Community";
import Dashboard from "../index";
import Line from "../../../common/Line";

// hooks
import { useCurrentUser } from "../../../hooks/authentication";

const getTotalPotential = (data) => {
  const potential = data?.reduce(
    (acc, current) => acc + Number(current.full_potential),
    0
  );
  const gift = data?.reduce(
    (acc, current) => acc + Number(current.gifts_needed),
    0
  );
  return [potential, gift];
};

const Home = () => {
  const { user } = useSelector((state) => state?.currentUser);
  const [fullPotential, setFullPotential] = useState(0);
  const [totalGift, setGift] = useState(0);
  const { communityStats } = useSelector((state) => state?.communityStats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(communityStatsAction());
  }, []);

  useEffect(() => {
    const [potential, gift] = getTotalPotential(communityStats?.data);
    setFullPotential(potential);
    setGift(gift);
  }, [communityStats]);

  useCurrentUser();
  return (
    <Dashboard>
      <div className="dashboard-main">
        <div className="title">{user?.name}</div>
        <div className="dashboard-summary">
          <SummaryElement title="total potential" number={fullPotential} />
          <SummaryElement title="total gifted" number={totalGift} />
          <SummaryElement title="net payout" number={0} />
        </div>
        <Line />
        <Community data={[1, 2, 3, 4]} />
      </div>
    </Dashboard>
  );
};

export default Home;
