import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// stripe
import { CardNumberElement } from "@stripe/react-stripe-js";

// hooks
import {
  useCreatePayment,
  useCompletePayment,
  usePaymentInfoSaved,
} from "../../../hooks/payment";
import { useCurrentUser } from "../../../hooks/authentication";
import { useCustomForm } from "../../../hooks/forms";

//components
import Dashboard from "../index";
import PayForm from "../../Payment/PayForm";
import Checkout from "../../../common/Checkout";

const CheckoutForm = () => {
  const [errors, setErrors] = useState("");
  const { user } = useSelector((state) => state?.currentUser);
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
    email: user?.email,
    name: user?.name,
    phone: "00000",
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
    <div className="dashboard-payment">
    <PayForm
      handleSubmit={handleSubmit}
      inputs={inputs}
      handleInputChange={handleInputChange}
      stripe={stripe}
      pending={pending}
      completePending={completePending}
      errors={errors}
    />
    </div>
  );
};

const Payment = () => (
  <Dashboard>
    <Checkout>
      <CheckoutForm />
    </Checkout>
  </Dashboard>
);

export default Payment;
