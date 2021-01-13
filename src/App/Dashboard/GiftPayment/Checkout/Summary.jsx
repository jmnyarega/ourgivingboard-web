import React from "react";
import PropTypes from "prop-types";

const Summary = ({ cart, handleToCart, preload }) => (
  <div className="gift-summary">
    <h3 className="element-header">Payment Summary</h3>
    {preload ? (
      <>
        <p>
          Kindly confirm that this is the amount you want to preload your
          account
        </p>
        <div className="title gift-total"> Total Amount: ${preload}</div>

        <div className="gift-btn">
          <button
            className="btn btn-primary"
            onClick={() => handleToCart("/preload")}
          >
            Change
          </button>
        </div>
      </>
    ) : (
      <>
        <table>
          <thead>
            <tr>
              <th>Board</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart?.inputs &&
              Object.keys(cart.inputs).map(
                (board) =>
                  cart?.inputs[board] > 0 && (
                    <tr key={board}>
                      <td>${board}</td>
                      <td>{cart?.inputs[board]}</td>
                      <td>${cart?.inputs[board] * board}</td>
                    </tr>
                  )
              )}
            <tr>
              <td></td>
              <td></td>
              <td className="title gift-total">Total = ${cart?.total}</td>
            </tr>
          </tbody>
        </table>
        <div className="gift-btn">
          <button className="btn btn-primary" onClick={handleToCart}>
            Change
          </button>
        </div>
      </>
    )}
  </div>
);

Summary.propTypes = {
  cart: PropTypes.any,
  handleToCart: PropTypes.func,
  preload: PropTypes.string,
};

export default Summary;
