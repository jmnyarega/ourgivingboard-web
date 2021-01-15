import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { waitingList as waitingListAction } from "../../../actions/waitingList/getWaitingList";
import Dashboard from "../index";
import Loader from "../../../Assets/25.gif";

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
        <table className="gift-container">
          <thead>
            <tr>
              <th>Fundboard</th>
              <th>Position</th>
              <th>Potential</th>
            </tr>
          </thead>
          <tbody>
            {waitingList ? (
              waitingList?.data?.map((item) => (
                <tr key={item}>
                  <td>${parseInt(item.gift_in)} Fundboard</td>
                  { item.position < 0 && (<td>Promoted</td>) }
                  { item.position === 0 && (<td>Active</td>) }
                  { item.position === 1 && (<td>Next</td>) }
                  { item.position > 1 && (<td>{item.position}</td>) }
                  <td>${parseInt(item.full_potential)}</td>
                </tr>
              ))
            ) : (
              <img src={Loader} />
            )}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
};

WaitingList.propTypes = {};

export default WaitingList;
