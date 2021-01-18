import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";

import { communityStats as communityStatsAction } from "../../../actions/communityStats/getCommunityStats";
import Dashboard from "../index";

const columns = [
  {
    title: "Fundboard",
    dataIndex: "full_potential",
    key: "fundboad",
    render: (item) => `$${parseInt(item)} Fundboard`,
  },
  {
    title: "Stats",
    dataIndex: "status",
    key: "status",
    render: () => "Live",
  },
  {
    title: "Gifts Needed",
    dataIndex: "gifts_needed",
    key: "gifts_needed",
  },
];
const CommunityStats = () => {
  const { communityStats } = useSelector((state) => state?.communityStats);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(communityStatsAction());
  }, []);

  return (
    <Dashboard>
      <div className="gift">
        <h3 className="element-header gift-title">Community Stats</h3>
        <Table
          dataSource={communityStats}
          columns={columns}
          pagination={{ pageSize: 10 }}
        />
      </div>
    </Dashboard>
  );
};

CommunityStats.propTypes = {};

export default CommunityStats;
