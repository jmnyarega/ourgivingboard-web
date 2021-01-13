import React from "react";
import PropTypes from "prop-types";
import Loader from "../../../Assets/25.gif";

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
  message,
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
          boards.map(({ gift_in }) => (
            <tr key={gift_in}>
              <td>${parseInt(gift_in)}</td>
              <td>
                <select
                  className="form-control"
                  name={gift_in}
                  value={inputs && inputs[gift_in]}
                  onChange={changed}
                >
                  {[0, 1, 2, 3, 4, 5].map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </td>
              <td>${(inputs && gift_in * inputs[gift_in]) || 0}</td>
            </tr>
          ))}
        {boards ?
        <tr>
          <td /> <td />
          <td className="title gift-total">Total = ${total}</td>
        </tr>
        : <img src={Loader} />}
      </tbody>
    </table>
    <div className="gift-btn">
      <button
        className="btn btn-primary"
        disabled={total <= 0 || disabled}
        onClick={handleSubmit}
      >
        {pending ? "Processing" : "Proceed"}
      </button>
    </div>
    {beginError && <div className="alert alert-danger">{beginError}</div>}
    {paymentError && <div className="alert alert-danger">{paymentError}</div>}
    {message && <div className="alert alert-success">{message}</div>}
  </div>
);

Gift.propTypes = {
  handleSubmit: PropTypes.func,
  disabled: PropTypes.bool,
  pending: PropTypes.bool,
  paymentError: PropTypes.any,
  beginError: PropTypes.any,
  total: PropTypes.number,
  initialQuantity: PropTypes.array,
  changed: PropTypes.func,
  boards: PropTypes.array,
  inputs: PropTypes.object,
  message: PropTypes.string,
}

export default Gift;
