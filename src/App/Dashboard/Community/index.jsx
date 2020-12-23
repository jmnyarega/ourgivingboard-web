import React from "react";
import PropTypes from "prop-types";

const Community = ({ data }) => (
  <div className="wrapper">
    <h3 className="element-header">Communities</h3>
    {data.map((_, index) => (
      <div className="community" key={index}>
        <h3 className="community-header">Royal Jewels</h3>
        <p className="community-description">
          The Royal Jewels community
        </p>
        <strong>8</strong> members
        <button className="btn btn-outline-primary">Join Community</button>
      </div>
    ))}
  </div>
);

Community.propTypes = {
  data: PropTypes.array,
};

export default Community;
