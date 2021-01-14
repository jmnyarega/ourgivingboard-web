import React from "react";
import PropTypes from "prop-types";

const Summary = ({ preload, handleToCart }) => (
  <div className="gift-summary">
    <h3 className="element-header">Prealod Summary</h3>
    <p>
      The amount below will be saved to your <b>ourgiving</b> account
    </p>
    <h3>Total = ${preload}</h3>
    <div className="gift-btn">
      <button className="btn btn-primary" onClick={handleToCart}>
        Change
      </button>
    </div>
  </div>
);

Summary.propTypes = {
  handleToCart: PropTypes.func,
  preload: PropTypes.string,
};

export default Summary;
