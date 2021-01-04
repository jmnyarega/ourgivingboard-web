import React, { useState } from "react";
import { useSelector } from "react-redux";

//stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// hooks
import { useCompletePayment, useBeginPayment, useConfirmPayment } from "../../../hooks/payment";
import { useCurrentUser } from "../../../hooks/authentication.js";
import { useCustomForm } from "../../../hooks/forms";

// components
import SavedCards from "../../../common/SaveCards";
import PayForm from "./PayForm";

const CheckoutForm = () => {
  const { payment } = useSelector((state) => state?.createPayment);
  const { begin } = useSelector((state) => state?.beginPayment);
  const { user } = useSelector((state) => state?.currentUser);
  const [cards] = useState([
    { last4: "1234", paymentId: "1" },
    { last4: "4321", paymentId: "2" },
  ]);
  const [savedCards, setSavedCards] = useState(false);
  const [paymentId, setPaymentId] = useState(false);
  const [inputs, handleInputChange] = useCustomForm(
    { name: "" },
    null,
    null,
    null
  );

  const handleUsedCards = (id) => {
    setSavedCards(!savedCards);
    setPaymentId(id);
  };

  useCurrentUser();

  const [handleSubmit] = useBeginPayment(user?.email);
  const [stripe] = useConfirmPayment(paymentId ? paymentId : payment, begin);

  useCompletePayment(payment);

  return (
    <div className="gift-payment">
      <h3 className="element-header">Payment Details</h3>
      <form>
        {cards.length ? (
          <SavedCards handleUsedCards={handleUsedCards} cards={cards} />
        ) : (
          <PayForm inputs={inputs} handleInputChange={handleInputChange} />
        )}
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={!((stripe && begin) || savedCards)}
        >
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
