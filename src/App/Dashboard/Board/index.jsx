import React from "react";
import PropTypes from "prop-types";

const Board = ({ data }) => (
  <div className="wrapper">
    <h3 className="element-header">Boards</h3>
    {data.map((_, index) => (
      <div className="board" key={index}>
        <h3 className="board-header"> Platinum Aspen Core Luxury Home </h3>
        <p className="board-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          possimus sed provident velit voluptas non
        </p>
        <strong>398</strong> members
        <button className="btn btn-outline-primary">Join Board</button>
      </div>
    ))}
  </div>
);

Board.propTypes = {
  data: PropTypes.array,
};

export default Board;
