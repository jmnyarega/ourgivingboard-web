import React from "react";
import PropTypes from "prop-types";

const Community = ({ data }) => (
  <>
    <div className="wrapper">
      <h3 className="element-header">Active Boards</h3>
      {data.map((_, index) => (
        <div className="community" key={index}>
          <p className="community-description">
            $80 Fundboard
          </p>
        </div>
      ))}
    </div>
    <div>&nbsp;</div>
    <div className="wrapper">
      <h3 className="element-header">Community Boards</h3>
      {data.map((_, index) => (
        <div className="community" key={index}>
          <p className="community-description">
            $80 Fundboard
          </p>
          <button className="btn btn-outline-primary">Gift</button>
        </div>
      ))}
    </div>
  </>
);

Community.propTypes = {
  data: PropTypes.array,
};

export default Community;
