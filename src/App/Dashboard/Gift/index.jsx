import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// components
import Dashboard from "../index";

// hooks
import { useCustomForm } from "../../../hooks/forms";

// helpers
import { addcart, getCart } from "../../../helpers/localStorage";

const range = (start, length) => Array.from({ length }, (_, i) => start + i);

const Gift = () => {
  const stored = getCart();
  const [total, setTotal] = useState(stored.total);
  const [intialQuantity] = useState(range(0, 20));
  const history = useHistory();

  const [inputs, handleInputChange] = useCustomForm(stored.inputs, Function, Function);

  const handleProceedToPayment = () => {
    addcart({ inputs, total });
    history.push("/gift-payment");
  };

  useEffect(() => {
    if (Object.values(inputs).length) {
      let total = 0;
      total = Object.keys(inputs).reduce((acc, board) => {
        return acc + Number(inputs[board]) * Number(board);
      }, 0);
      setTotal(total);
    }
  }, [inputs]);

  return (
    <Dashboard>
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
            {[10, 60].map((board) => (
              <tr key={board}>
                <td className="gift-board__box-title">${board}</td>
                <td>
                  <select
                    className="form-control"
                    name={board}
                    value={inputs[board]}
                    onChange={handleInputChange}
                  >
                    {intialQuantity.map((value) => (
                      <option key={value}>{value}</option>
                    ))}
                  </select>
                </td>
                <td>${board * inputs[board] || 0}</td>
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
            disabled={total <= 0}
            onClick={handleProceedToPayment}
          >
            Proceed To Payment
          </button>
        </div>
      </div>
    </Dashboard>
  );
};

export default Gift;
