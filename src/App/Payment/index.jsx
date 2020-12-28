import React from "react";
import { useSelector } from "react-redux";

//stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";

// hooks
import {
  useCreatePayment,
  useConfirmPayment,
  useCompletePayment,
  useBeginPayment,
} from "../../hooks/payment.js";
import {useCurrentUser} from "../../hooks/authentication.js";

//components
import Dashboard from "../Dashboard";

const CheckoutForm = () => {
  const { payment } = useSelector((state) => state?.createPayment);
  const { user } = useSelector((state) => state?.currentUser);
  const { begin } = useSelector((state) => state?.beginPayment);
  const { payment: confirmPayment } = useSelector(
    (state) => state?.confirmPayment
  );

  useCurrentUser();

  // useBeginPayment -> useCreatePayment -> useConfirmPayment -> useCompletePayment
  const [handleSubmit] = useBeginPayment(user?.email);
  const [stripe] = useCreatePayment(CardElement, begin, {
    email: user?.email,
    name: user?.name,
    phone: "8989898989",
  });
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
