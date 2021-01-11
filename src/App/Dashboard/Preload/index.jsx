import React from "react";
import { useSelector } from "react-redux";

// hooks
import { useCompletePayment, useBeginPayment, useConfirmPayment } from "../../../hooks/payment";
import { useCurrentUser } from "../../../hooks/authentication.js";

// components
import Dashboard from "../index";
import Checkout from "../../../common/Checkout";

// hooks
import { useCustomForm } from "../../../hooks/forms";

// helpers
import { getEmail } from "../../../helpers/localStorage";

const CheckoutForm = () => {
  useCurrentUser();
  const email = getEmail();

  // handles inputs & sends input to server
  const [inputs, handleInputChange] = useCustomForm(
    { amount: 0 },
    Function,
    Function
  );
  const [handleSubmit] = useBeginPayment(email, inputs?.amount);

  // begin payment response
  const { begin, error: beginError, pending: beginPending } = useSelector(
    (state) => state?.beginPayment
  );

  // gets the confirm payment response, to stripe
  const {
    payment,
    errors: paymentError,
    pending: paymentPending,
  } = useSelector((state) => state?.confirmPayment);

  // confirm & complete payment
  const [stripe] = useConfirmPayment(payment, begin, beginError);
  useCompletePayment(payment);

  return (
    <div className="preload">
      <h3 className="element-header gift-title">Preload Gift</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Enter Amount:
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
          disabled={!stripe || beginPending || paymentPending}
          onClick={handleSubmit}
        >
          {beginPending || paymentPending ? "Processing" : "Make Order"}
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
};

const GiftPayment = () => {
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

export default GiftPayment;
