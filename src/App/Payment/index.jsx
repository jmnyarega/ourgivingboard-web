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
import { useCreatePayment, useCompletePayment } from "../../hooks/payment.js";
import { useCurrentUser } from "../../hooks/authentication.js";

//components
import Dashboard from "../Dashboard";

const CheckoutForm = () => {
  const { payment } = useSelector((state) => state?.createPayment);
  const { user } = useSelector((state) => state?.currentUser);
  const { begin } = useSelector((state) => state?.beginPayment);

  useCurrentUser();

  const [stripe, handleSubmit] = useCreatePayment(CardNumberElement, begin, {
    email: user?.email,
    name: user?.name,
    phone: "8989898989",
  });
  useCompletePayment(payment);

  return (
    <div className="payment">
      <form onSubmit={handleSubmit}>
        <h3 className="element-header">Enter Credit Card</h3>
        <label>Card Number:</label>
        <CardNumberElement className="payment-form form-control" />
        <label>CVC:</label>
        <CardCvcElement className="payment-form form-control" />
        <label>CVC:</label>
        <CardExpiryElement className="payment-form form-control" />
        <button className="btn btn-primary" type="submit" disabled={!stripe}>
          Save to Account
        </button>
      </form>
    </div>
  );
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET);

export const Payment = () => (
  <Dashboard>
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </Dashboard>
);
