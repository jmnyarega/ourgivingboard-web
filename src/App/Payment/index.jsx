import React, { useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import Dashboard from "../Dashboard";
import {
  useCreatePayment,
  useConfirmPayment,
  useCompletePayment,
  useBeginPayment,
} from "../../hooks/payment.js";

const CheckoutForm = () => {
  const userDetails = {
    email: "jmnyarega@gmail.com",
    phone: "90900909",
    name: "josiah",
  };
  const [billingDetails] = useState(userDetails);
  const { payment } = useSelector((state) => state?.createPayment);
  const { begin } = useSelector((state) => state?.beginPayment);
  const { payment: confirmPayment } = useSelector(
    (state) => state?.confirmPayment
  );

  // useBeginPayment -> useCreatePayment -> useConfirmPayment -> useCompletePayment
  const [handleSubmit] = useBeginPayment(billingDetails.email);
  const [stripe] = useCreatePayment(CardElement, begin, billingDetails);
  useConfirmPayment(payment);
  useCompletePayment(confirmPayment);

  return (
    <form onSubmit={handleSubmit} style={{ width: "60%", marginTop: "5rem" }}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
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
