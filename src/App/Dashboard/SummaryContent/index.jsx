import React from "react";
import PropTypes from "prop-types";

const SummaryElement = ({ title, number }) => (
  <div className="element-box">
    <h3 className="label">{title}</h3>
    <p className="value">${number}</p>
  </div>
);

SummaryElement.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};

export default SummaryElement;
