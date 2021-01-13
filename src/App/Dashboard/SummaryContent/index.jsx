import React from "react";
import PropTypes from "prop-types";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const SummaryElement = ({ title, number }) => {
  const currency = number ? Number(number.replace(/[^0-9.-]+/g, "")) * 0.75 : 0;

  return (
    <div className="element-box">
      <p className="label title">{title}</p>
      <p className="value">{number}</p>
      <div className="flex element-box-footer">
        {title === "net payout" && (
          <span>Actual: {formatter.format(currency)}</span>
        )}
        <button className="btn btn-link element-box-btn">
          <i className="fa fa-arrow-right" />
        </button>
      </div>
    </div>
  );
};

SummaryElement.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default SummaryElement;
