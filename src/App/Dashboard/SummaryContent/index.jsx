import React from "react";
import PropTypes from "prop-types";

const SummaryElements = ({ title, number }) => (
  <div className="element-box">
    <h3 className="label">{title}</h3>
    <p className="value">${number}</p>
  </div>
);

SummaryElements.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};

export default SummaryElements;
