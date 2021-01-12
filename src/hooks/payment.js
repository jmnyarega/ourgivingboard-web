import { useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

//actions
import { createPayment } from "../actions/payment/createPayment";
import { confirmPayment } from "../actions/payment/confirmPayment";
import { completePayment } from "../actions/payment/completePayment";
import { beginPayment } from "../actions/payment/beginPayment";

export const useBeginPayment = (board) => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      dispatch(beginPayment(board));
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

export const useConfirmPayment = (paymentId, begin, error) => {
  const stripe = useStripe();
  const dispatch = useDispatch();
  useEffect(() => {
    if (begin && !error) {
      dispatch(
        confirmPayment(
          stripe,
          begin.payment_intent_client_secret,
          begin.payment_method_id
        )
      );
    }
  }, [begin, error]);
  return [stripe];
};

export const useCompletePayment = (payment) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (payment) {
      const {
        id,
        billing_details: { email },
      } = payment;
      const customer = {
        customer: {
          email: email,
          payment_method_id: id,
        },
      };
      dispatch(completePayment(customer));
    }
  }, [payment]);
};

export const useCompleteJoinBoard = (payment) => {
  const history = useHistory();
  useEffect(() => {
    if (payment) {
      setTimeout(() => history.push("/home"), 3000);
    }
  }, [payment]);
};

export const usePaymentInfoSaved = (complete) => {
  useEffect(() => {
    if (complete) {
      location.href="/#/home";
      location.reload();
    }
  }, [complete]);
};
