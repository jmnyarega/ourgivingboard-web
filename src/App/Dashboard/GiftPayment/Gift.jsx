import React from "react";
import PropTypes from "prop-types";

const Gift = ({
  handleSubmit,
  disabled,
  pending,
  paymentError,
  beginError,
  total,
  changed,
  inputs,
  boards,
}) => (
  <div className="gift">
    <h3 className="element-header gift-title">Select Amount ($USD)</h3>
    <table className="gift-container">
      <thead>
        <tr>
          <th>Board</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {boards &&
          boards.map((board) => (
            <tr key={board}>
              <td className="gift-board__box-title">${board}</td>
              <td>
                <select
                  className="form-control"
                  name={board}
                  value={inputs && inputs[board]}
                  onChange={changed}
                >
                  {[0, 1, 2, 3, 4, 5].map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </td>
              <td>${(inputs && board * inputs[board]) || 0}</td>
            </tr>
          ))}
        <tr>
          <td /> <td />
          <td className="title gift-total">Total = ${total}</td>
        </tr>
      </tbody>
    </table>
    <div className="gift-btn">
      <button
        className="btn btn-primary"
        disabled={total <= 0 || pending || disabled}
        onClick={handleSubmit}
      >
        {pending ? "Processing" : "Make Order"}
      </button>
    </div>
    {paymentError ||
      (beginError && (
        <div className="alert alert-danger">
          {paymentError}
          {beginError}
        </div>
      ))}
  </div>
);

Gift.propTypes = {
  handleSubmit: PropTypes.func,
  disabled: PropTypes.bool,
  pending: PropTypes.bool,
  paymentError: PropTypes.object,
  beginError: PropTypes.any,
  total: PropTypes.number,
  initialQuantity: PropTypes.array,
  changed: PropTypes.func,
  boards: PropTypes.array,
  inputs: PropTypes.object
}

export default Gift;
