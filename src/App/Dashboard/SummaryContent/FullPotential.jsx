import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { waitingList as waitingListAction } from "../../../actions/waitingList/getWaitingList";

const calculateTotalPotential = (waitingList) => {
  const totalPotential = waitingList?.data.reduce(
    (acc, current) => acc + Number(current.full_potential),
    0
  );

  return totalPotential;
};

const FullPotential = () => {
  const { waitingList } = useSelector((state) => state?.waitingList);
  const [potential, setPotential] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(waitingListAction());
  }, []);

  useEffect(() => {
    const potential = calculateTotalPotential(waitingList);
    setPotential(potential);
  }, [waitingList]);

  return (
    <div className="element-box">
      <p className="label title">Total Potential</p>
      <p className="value">${potential}</p>
      <div className="flex flex-jc-sb element-box-footer">
        <span>Actual: ${(0 * 0.95).toFixed(2)}</span>
        <button className="btn btn-link">
          <i className="fa fa-arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default FullPotential;
