import React from "react";
import PropTypes from "prop-types";

const CommunityList = ({ communities }) => {
  return (
    <div className="admin-community-summary">
      <table className="gift-container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {communities.map((com, id) => (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>{com?.name}</td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

CommunityList.propTypes = {
  communities: PropTypes.array,
};

export default CommunityList;
