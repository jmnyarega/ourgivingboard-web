import { useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPayment } from "../actions/payment/createPayment";
import { confirmPayment } from "../actions/payment/confirmPayment";
import { completePayment } from "../actions/payment/completePayment";
import { beginPayment } from "../actions/payment/beginPayment";

export const useBeginPayment = (evt, email) => {
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
      dispatch(beginPayment(email));
    }
  };
  return [handleSubmit];
};

export const useCreatePayment = (CardNumberElement, user) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      const cardElement = elements.getElement(CardNumberElement);
      dispatch(createPayment(stripe, cardElement, user));
    }
  };

  return [stripe, handleSubmit];
};

export const useConfirmPayment = (paymentId, begin) => {
  const stripe = useStripe();
  const dispatch = useDispatch();
  useEffect(() => {
    if (begin) {
      dispatch(
        confirmPayment(
          stripe,
          process.env.REACT_APP_STRIPE_SECRET_INTENT,
          paymentId
        )
      );
    }
  }, [begin]);
  return [stripe];
};

export const useCompletePayment = (payment) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (payment) {
    const {id, billing_details: {email}} = payment;
    const customer = {id, email};
    dispatch(completePayment(customer));
    }
  }, [payment]);
};

export const usePaymentInfoSaved = (complete) => {
  const history = useHistory();
  console.log(complete);
  useEffect(() => {
    if (complete) {
      history.push("/home");
    }
  }, [complete]);
};


// create payment intent 
