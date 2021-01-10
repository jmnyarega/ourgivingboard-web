import React from "react";
import PropTypes from "prop-types";

const BoardList = ({ boards }) => {
  return (
    <div className="admin-community-summary">
      <table className="gift-container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Board</th>
            <th>Community</th>
            <th>Potential</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((b, id) => (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>{b?.name}</td>
              <td>{b?.community}</td>
              <td>${b?.potential}</td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.array,
};

export default BoardList;
