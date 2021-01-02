import React, { useEffect, useState } from "react";

// hooks
import { useCustomForm } from "../../../hooks/forms";

// components
import Dashboard from "../index.jsx";
import GiftPayment from "../GiftPayment";

const Gift = () => {
  const [total, setTotal] = useState(0);
  const [checkout, setCheckout] = useState(false);
  const [inputs, handleInputChange] = useCustomForm(
    {},
    () => {},
    () => {},
    null
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    total && setCheckout(true);
  };

  useEffect(() => {
    let sum = 0;
    Object.keys(inputs).forEach((board) => {
      sum += board * inputs[board];
    });
    setTotal(sum);
  }, [inputs]);

  return (
    <Dashboard>
      <div className="gift">
        <form onSubmit={handleSubmit}>
          <h3 className="element-header">Gift</h3>
          <div className="gift-summary">
            <div className="gift-summary-header">Board</div>
            <div className="gift-summary-header">Quantity</div>
            <div className="gift-summary-header">Total</div>
            <hr className="gift-summary-line" />
            {[80, 480].map((board) => (
              <>
                <div>${board}</div>
                <input
                  className="form-control"
                  onChange={handleInputChange}
                  value={inputs[board]}
                  default={0}
                  type="number"
                  name={board}
                  min="0"
                />
                <div>${(inputs[board] || 0) * board}</div>
              </>
            ))}
            <div className="gift-summary-total">${total}</div>
          </div>
          <button className="btn btn-primary" type="submit">
            Gift
          </button>
        </form>
      </div>
      {checkout && <GiftPayment />}
    </Dashboard>
  );
};

export default Gift;
