import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// hooks
import { useBeginPayment } from "../../../hooks/payment";
import { useCurrentUser } from "../../../hooks/authentication.js";

// components
import Dashboard from "../index";
import Checkout from "../../../common/Checkout";

// hooks
import { useCustomForm } from "../../../hooks/forms";

//helpers
import {
  savePreload,
  getPreload,
  savePaymentId,
  saveIntent,
} from "../../../helpers/localStorage";

const CheckoutForm = () => {
  useCurrentUser();
  const preload = getPreload();
  const history = useHistory();

  const [amount, setAmount] = useState(0);

  // handles inputs & sends input to server
  const [inputs, handleInputChange] = useCustomForm(
    { amount: preload },
    Function,
    Function
  );
  const [handleSubmit] = useBeginPayment(
    [{ fundboard_id: 2, quantity: 3 }],
    "preload", amount
  );

  // begin payment response
  const { begin, error: beginError, pending: beginPending } = useSelector(
    (state) => state?.beginPayment
  );

  useEffect(() => {
    if (begin) {
      if (amount > 0) {
        savePreload(amount);
        savePaymentId(begin?.payment_method_id);
        saveIntent(begin?.payment_intent_client_secret);
        history.push("/gift-checkout");
      }
    }
  }, [begin]);

  useEffect(() => {
    inputs.amount && setAmount(inputs.amount);
  }, [inputs]);

  return (
    <div className="preload">
      <h3 className="element-header gift-title">Preload Gift</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Enter Amount You Account:
          <input
            name="amount"
            type="number"
            min="0"
            placeholder="Enter amount"
            value={inputs.amount}
            className="form-control"
            onChange={handleInputChange}
            required
          />
        </label>
      </form>
      <div className="preload-btn">
        <button
          className="btn btn-primary"
          disabled={amount <= 0 || beginPending}
          onClick={handleSubmit}
        >
          {beginPending ? "Processing" : " Proceed To Payment"}
        </button>
      </div>
      {!beginPending && beginError && (
        <div className="alert alert-danger">{beginError}</div>
      )}
    </div>
  );
};

const PreloadGift = () => {
  return (
    <Dashboard>
      <div className="preload-wrapper">
        <Checkout>
          <CheckoutForm />
        </Checkout>
      </div>
    </Dashboard>
  );
};

export default PreloadGift;
