import React from "react";
import PropTypes from "prop-types";

const SummaryElement = ({ title, number }) => (
  <div className="element-box">
    <p className="label">{title}</p>
    <p className="value">${number}</p>
    <div className="flex flex-jc-sb element-box-footer">
      <span>Location</span>
      <button className="btn btn-link">
        <i className="fa fa-arrow-right" />
      </button>
    </div>
  </div>
);

SummaryElement.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default SummaryElement;
