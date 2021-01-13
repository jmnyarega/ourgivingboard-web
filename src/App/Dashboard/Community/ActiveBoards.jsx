import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { activeBoards as activeBoardsAction } from "../../../actions/activeBoards/getActiveBoards";

const ActiveBoards = () => {
  const handleActiveBoards = () => {
    location.href = "/#/active-boards";
    location.reload();
  };

  const { activeBoards } = useSelector((state) => state?.activeBoards);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(activeBoardsAction());
  }, []);

  return (
    <div className="element-box">
      <h3 className="label title">Active Boards</h3>
      <p className="element-description">
        You have {activeBoards?.data?.length} active boards
      </p>
      <button className="btn btn-outline-primary" onClick={handleActiveBoards}>
        View All
      </button>
    </div>
  );
};

export default ActiveBoards;
