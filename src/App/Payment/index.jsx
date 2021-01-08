import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardNumberElement } from "@stripe/react-stripe-js";

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
import Wizard from "../../common/wizard";
import PayForm from "./PayForm";


// remove this code
const email = localStorage.getItem("email");

const CheckoutForm = () => {
  const [errors, setErrors] = useState("");
  // const { user } = useSelector((state) => state?.currentUser);
  const { payment, error, pending } = useSelector(
    (state) => state?.createPayment
  );
  const {
    complete,
    error: completeError,
    pending: completePending,
  } = useSelector((state) => {
    return state?.completePayment;
  });
  const [inputs, handleInputChange] = useCustomForm(
    { name: "" },
    null,
    null,
    null
  );

  useCurrentUser();
  useCompletePayment(payment);

  const [stripe, handleSubmit] = useCreatePayment(CardNumberElement, {
    email,
    name: inputs?.name || "johndoe",
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
    <>
      <Wizard
        classes="hide-for-mobile"
        steps={["active", "active", "progress"]}
      />
      <PayForm
        handleSubmit={handleSubmit}
        inputs={inputs}
        handleInputChange={handleInputChange}
        stripe={stripe}
        pending={pending}
        completePending={completePending}
        errors={errors}
      />
    </>
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
