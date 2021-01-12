import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { communityStats as communityStatsAction } from "../../../actions/communityStats/getCommunityStats";
import Dashboard from "../index"


const CommunityStats = () => {

  const { communityStats } = useSelector(
    (state) => state?.communityStats
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(communityStatsAction());
  }, []);

  return (
    <Dashboard>
      <div className="gift">
        <h3 className="element-header gift-title">Community Stats</h3>
        <table className="gift-container">
          <thead>
            <tr>
              <th>Fundboard</th>
              <th>Status</th>
              <th>Gifts Needed</th>
            </tr>
          </thead>
          <tbody>
            {
              communityStats?.data?.map(
                (item) => (
                  <tr key={item}>
                    <td>${parseInt(item.full_potential)} Fundboard</td>
                    <td>Live</td>
                    <td>{parseInt(item.gifts_needed)}</td>
                  </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>
    </Dashboard>
  )
}

CommunityStats.propTypes = {}

export default CommunityStats;
