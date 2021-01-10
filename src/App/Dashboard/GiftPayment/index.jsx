import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// hooks
import { useCompletePayment, useBeginPayment, useConfirmPayment } from "../../../hooks/payment";
import { useCurrentUser } from "../../../hooks/authentication.js";
import { useCustomForm } from "../../../hooks/forms";

// components
import PayForm from "./PayForm";
import Summary from "./Summary";
import Dashboard from "../index";

// helpers
import { getCart, getEmail } from "../../../helpers/localStorage";

const CheckoutForm = () => {
  const {
    payment,
    errors: paymentError,
    pending: paymentPending,
  } = useSelector((state) => state?.createPayment);
  const { begin, error: beginError, pending: beginPending } = useSelector(
    (state) => state?.beginPayment
  );
  // const { user } = useSelector((state) => state?.currentUser);
  const email = getEmail();

  const [inputs, handleInputChange] = useCustomForm(
    { name: "" },
    null,
    null,
    null
  );

  useCurrentUser();
  const [handleSubmit] = useBeginPayment(email);
  const [stripe] = useConfirmPayment(payment, begin, beginError);

  useCompletePayment(payment);
  return (
    <div className="gift-payment">
      <h3 className="element-header">Payment Details</h3>
      <form>
        <PayForm inputs={inputs} handleInputChange={handleInputChange} />
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={!stripe || paymentPending || beginPending}
        >
          {paymentPending || beginPending ? "Processing" : "Checkout"}
        </button>
      </form>
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

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET);
const cart = getCart();

const GiftPayment = () => {
  const history = useHistory();
  const handleToCart = () => {
    history.push("/gift");
  };
  return (
    <Dashboard>
      <div className="gift-wrapper">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        <Summary cart={cart} handleToCart={handleToCart} />
      </div>
    </Dashboard>
  );
};

export default GiftPayment;
