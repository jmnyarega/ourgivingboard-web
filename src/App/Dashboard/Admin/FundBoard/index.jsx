import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FundBoardList from "./FundBoardList";
import Dashboard from "../../index";
import { createBoard } from "../../../../actions/board/create";
import { getBoards } from "../../../../actions/board/get";
import { useCustomForm } from "../../../../hooks/forms";

const FundBoard = () => {
  const dispatch = useDispatch();
  const { board } = useSelector((state) => state?.createBoard);
  const [inputs, handleInputChange, handleSubmit] = useCustomForm(
    { name: "", potential: "", community: "" },
    dispatch,
    createBoard
  );

  useEffect(() => {
    dispatch(getBoards());
  }, []);

  console.log(board)

  return (
    <Dashboard>
      <div className="admin-board">
        <h3 className="element-header title">Manage Fun Boards</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="community"> Community:
            <select
              className="form-control"
              name="community"
              id="community"
              onChange={handleInputChange}
              value={inputs.community}
            >
              <option value="">Select Community</option>
              <option value="1">Royal Jewels 0</option>
              <option value="2">Royal Jewels 1</option>
              <option value="3">Royal Jewels 2</option>
            </select>
          </label>
          <label htmlFor="name"> Name:
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Enter Name"
              value={inputs.name}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="potential"> Potential:
            <input
              type="number"
              min="0"
              name="potential"
              id="potential"
              className="form-control"
              placeholder="Enter Name"
              value={inputs.potential}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
        <FundBoardList boards={[board]} />
      </div>
    </Dashboard>
  );
};

export default FundBoard;
