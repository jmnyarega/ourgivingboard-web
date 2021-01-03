import React from "react";
import { useSelector } from "react-redux";

//stripe
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

// hooks
import { useCompletePayment, useBeginPayment, useConfirmPayment } from "../../../hooks/payment.js";
import { useCurrentUser } from "../../../hooks/authentication.js";
import { useCustomForm } from "../../../hooks/forms";

const CheckoutForm = () => {
  const { payment } = useSelector((state) => state?.createPayment);
  const { begin } = useSelector((state) => state?.beginPayment);
  const { user } = useSelector((state) => state?.currentUser);
  const [inputs, handleInputChange] = useCustomForm(
    { name: "" },
    null,
    null,
    null
  );

  useCurrentUser();

  const [handleSubmit] = useBeginPayment(user?.email);
  const [stripe] = useConfirmPayment("5", begin);

  useCompletePayment(payment);

  return (
    <div className="gift-payment">
      <form onSubmit={handleSubmit}>
        <h3 className="element-header">Checkout</h3>
        <label className="gift-payment-card">
          Card Number:
          <CardNumberElement
            className="gift-payment-form form-control"
            options={{
              iconStyle: "solid",
              showIcon: true,
            }}
          />
        </label>
        <label className="gift-payment-name">
          Name:
          <input
            placeholder="Name on Card"
            className="gift-payment-form form-control"
            name="name"
            value={inputs.name}
            onChange={handleInputChange}
          />
        </label>
        <div className="flex flex-jc-sb">
          <label className="gift-payment-cvc">
            CVC
            <CardCvcElement
              options={{
                iconStyle: "solid",
                showIcon: true,
              }}
              className="gift-payment-form form-control"
            />
          </label>
          <label className="gift-payment-expiry">
            Expiry Date
            <CardExpiryElement className="gift-payment-form form-control" />
          </label>
        </div>
        <button className="btn btn-primary" type="submit" disabled={!stripe && !begin}>
          Checkout
        </button>
      </form>
    </div>
  );
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET);

const GiftPayment = () => (
  <>
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </>
);

export default GiftPayment;
