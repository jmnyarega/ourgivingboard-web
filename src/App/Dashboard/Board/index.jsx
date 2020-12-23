import React from "react";
import PropTypes from "prop-types";

const Board = ({ data }) => (
  <div className="wrapper">
    <h3 className="element-header">Boards</h3>
    {data.map((_, index) => (
      <div className="board" key={index}>
        <h3 className="board-header">Royal Jewels</h3>
        <p className="board-description">
          The Royal Jewels community
        </p>
        <strong>8</strong> members
        <button className="btn btn-outline-primary">Join Board</button>
      </div>
    ))}
  </div>
);

Board.propTypes = {
  data: PropTypes.array,
};

export default Board;
