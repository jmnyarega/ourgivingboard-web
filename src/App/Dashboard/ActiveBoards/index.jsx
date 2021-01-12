import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { activeBoards as activeBoardsAction } from "../../../actions/activeBoards/getActiveBoards";
import Dashboard from "../index"


const ActiveBoards = () => {

  const { activeBoards } = useSelector(
    (state) => state?.activeBoards
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(activeBoardsAction());
  }, []);

  return (
    <Dashboard>
      <div className="gift">
        <h3 className="element-header gift-title">Active Boards</h3>
        <table className="gift-container">
          <thead>
            <tr>
              <th>Fundboard</th>
              <th>Potential</th>
            </tr>
          </thead>
          <tbody>
            {
              activeBoards?.data?.map(
                (item) => (
                  <tr key={item}>
                    <td>${parseInt(item.gift_in)} Fundboard</td>
                    <td>${parseInt(item.full_potential)}</td>
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

ActiveBoards.propTypes = {}

export default ActiveBoards;
