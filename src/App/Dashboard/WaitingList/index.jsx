import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";

import { waitingList as waitingListAction } from "../../../actions/waitingList/getWaitingList";
import Dashboard from "../index";

const columns = [
  {
    title: "Fundboard",
    dataIndex: "gift_in",
    key: "gift_in",
    render: (value) => `$${parseInt(value)} Fundboard`,
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
    render: (position) => {
      if (position < 0) return "Promoted";
      if (position === 0) return "position";
      if (position === 1) return "Next";
      if (position > 1) return "position";
    },
  },
  {
    title: "Potential",
    dataIndex: "full_potential",
    key: "full_potential",
    render: (value) => `$${parseInt(value)}`,
  },
];

const WaitingList = () => {
  const { waitingList } = useSelector((state) => state?.waitingList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(waitingListAction());
  }, []);

  return (
    <Dashboard>
      <div className="gift">
        <h3 className="element-header gift-title">Waiting List</h3>
        <Table
          dataSource={waitingList?.data}
          columns={columns}
          pagination={{ pageSize: 10 }}
        />
      </div>
    </Dashboard>
  );
};

WaitingList.propTypes = {};

export default WaitingList;
