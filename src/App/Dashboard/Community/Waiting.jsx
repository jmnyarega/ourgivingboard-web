import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { waitingList as waitingListAction } from "../../../actions/waitingList/getWaitingList";

const nearestPosition = (waitingList) => {
  const positions = waitingList?.data
    .filter(({ position }) => position > 0)
    .map(({ position }) => position);

  const leastPosition = positions ? Math.min(...positions) : -1;

  const data = waitingList?.data.find(
    ({ position }) => position === leastPosition
  );

  return [leastPosition, data?.gift_in];
};

const Waiting = () => {
  const handleWaitingList = () => {
    location.href = "/#/waiting-list";
    location.reload();
  };

  const { waitingList } = useSelector((state) => state?.waitingList);
  const [position, setPosition] = useState(-1);
  const [board, setBoard] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(waitingListAction());
  }, []);

  useEffect(() => {
    const [position, board] = nearestPosition(waitingList);
    setPosition(position);
    setBoard(board);
  }, [waitingList]);

  return (
    <div className="element-box">
      <h3 className="label title">Waiting list</h3>
      {position < 0 ? (
        <p className="element-description">You are not on any boards.</p>
      ) : (
        <p className="element-description">
          You are #{position} on ${board}.
        </p>
      )}
      <button className="btn btn-outline-primary" onClick={handleWaitingList}>
        Visit Board
      </button>
    </div>
  );
};

export default Waiting;
