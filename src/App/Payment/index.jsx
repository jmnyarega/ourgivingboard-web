import React, { useState, useEffect } from "react";
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
import {
  useCreatePayment,
  useCompletePayment,
  usePaymentInfoSaved,
} from "../../hooks/payment";
import { useCurrentUser } from "../../hooks/authentication";
import { useCustomForm } from "../../hooks/forms";

//components
import GuestTopBar from "../Dashboard/TopBar/GuestTopBar";

const CheckoutForm = () => {
  const [errors, setErrors] = useState("");
  const { user } = useSelector((state) => state?.currentUser);
  const { payment, error, pending } = useSelector(
    (state) => state?.createPayment
  );
  const {
    complete,
    errors: completeError,
    pending: completePending,
  } = useSelector((state) => state?.completePayment);
  const [inputs, handleInputChange] = useCustomForm(
    { name: "" },
    null,
    null,
    null
  );

  useCurrentUser();
  useCompletePayment(payment);

  const [stripe, handleSubmit] = useCreatePayment(CardNumberElement, {
    email: user?.email,
    name: inputs?.name,
    phone: "8989898989",
  });

  useEffect(() => {
    if (error) {
      setErrors(error?.error.message);
    }
    if (completeError) {
      setErrors(completeError?.message);
    }
  }, [error, completeError]);

  usePaymentInfoSaved(complete);

  return (
    <div className="payment">
      <form onSubmit={handleSubmit}>
        <h3 className="element-header">Payment Information</h3>
        <label className="payment-card">
          Card Number:
          <CardNumberElement
            className="payment-form form-control"
            options={{
              iconStyle: "solid",
              showIcon: true,
            }}
          />
        </label>
        <label className="payment-name">
          Name:
          <input
            placeholder="Name on Card"
            className="payment-form form-control"
            name="name"
            value={inputs.name}
            onChange={handleInputChange}
          />
        </label>
        <div className="flex flex-column-gap-1">
          <label className="payment-cvc">
            CVC
            <CardCvcElement
              options={{
                iconStyle: "solid",
                showIcon: true,
              }}
              className="payment-form form-control"
            />
          </label>
          <label className="payment-expiry">
            Expiry Date
            <CardExpiryElement className="payment-form form-control" />
          </label>
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={!stripe || pending || completePending}
        >
          {pending || completePending ? "Processing..." : "Save to Account"}
        </button>
        {errors && <div className="alert alert-danger">{errors}</div>}
      </form>
    </div>
  );
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET);

const Payment = () => (
  <>
    <GuestTopBar />
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </>
);

export default Payment;
