import React from "react";
import PropTypes from "prop-types";

//helpers
import { formatter, currencyToNumber } from "../../../helpers/currency";

const SummaryElement = ({ title, number, actual }) => {
  return (
    <div className="element-box">
      <p className="label title">{title}</p>
      <p className="value">{
        number && formatter.format(currencyToNumber(number.toString()))
      }</p>
      <div className="flex element-box-footer">
        {title === "net payout" && (
          <span>Actual: {formatter.format(currencyToNumber(actual))}</span>
        )}
        {/* <button className="btn btn-link element-box-btn"> */}
        {/*   <i className="fa fa-arrow-right" /> */}
        {/* </button> */}
      </div>
    </div>
  );
};

SummaryElement.propTypes = {
  title: PropTypes.string,
  number: PropTypes.any,
  actual: PropTypes.any,
};

export default SummaryElement;
