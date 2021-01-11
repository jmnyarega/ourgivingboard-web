import React from "react";
import PropTypes from "prop-types";

//stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET);

const Checkout = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

Checkout.propTypes = {
  children: PropTypes.object,
};

export default Checkout;
