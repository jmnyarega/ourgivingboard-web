import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { waitingList as waitingListAction } from "../../../actions/waitingList/getWaitingList";

// components
import SummaryElement from "../SummaryContent";
import Community from "../Community";
import Dashboard from "../index";
import Line from "../../../common/Line";

// hooks
import { useCurrentUser } from "../../../hooks/authentication";

const Home = () => {
  const { user } = useSelector((state) => state?.currentUser);
  const { totalPotential = 0, totalGifted = 0, netPayout = 0 } = useSelector(
    (state) => state?.summary
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(waitingListAction());
  }, []);

  useCurrentUser();
  return (
    <Dashboard>
      <div className="dashboard-main">
        <div className="title">{user?.name}</div>
        <div className="dashboard-summary">
          <SummaryElement title="total potential" number={totalPotential} />
          <SummaryElement title="total gifted" number={totalGifted} />
          <SummaryElement title="net payout" number={netPayout} />
        </div>
        <Line />
        <Community data={[1, 2, 3, 4]} />
      </div>
    </Dashboard>
  );
};

export default Home;
