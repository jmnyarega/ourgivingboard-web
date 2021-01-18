import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";

import { activeBoards as activeBoardsAction } from "../../../actions/activeBoards/getActiveBoards";
import Dashboard from "../index";

const columns = [
  {
    title: "Fundboard",
    dataIndex: "gift_in",
    key: "gift_in",
    render: (item) => `$${parseInt(item)} Fundboard`,
  },
  {
    title: "Potential",
    dataIndex: "full_potential",
    key: "full_potential",
    render: (value) => parseInt(value),
  },
];

const ActiveBoards = () => {
  const { activeBoards } = useSelector((state) => state?.activeBoards);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(activeBoardsAction());
  }, []);

  return (
    <Dashboard>
      <div className="gift">
        <h3 className="element-header gift-title">Active Boards</h3>
        <Table
          dataSource={activeBoards?.data}
          pagination={{ pageSize: 10 }}
          columns={columns}
        />
      </div>
    </Dashboard>
  );
};

ActiveBoards.propTypes = {};

export default ActiveBoards;
