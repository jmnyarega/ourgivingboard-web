import { useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";

//actions
import { createPayment } from "../actions/payment/createPayment";
import { confirmPayment } from "../actions/payment/confirmPayment";
import { completePayment } from "../actions/payment/completePayment";
import { beginPayment } from "../actions/payment/beginPayment";

// helpers
import { clearCart } from "../helpers/localStorage";

export const useBeginPayment = (board, type="normal") => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      dispatch(beginPayment(board, type));
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

export const useConfirmPayment = (paymentId, secretIntent) => {
  const stripe = useStripe();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      dispatch(confirmPayment(stripe, secretIntent, paymentId));
    }
  };
  return [stripe, handleSubmit];
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
  useEffect(() => {
    if (payment) {
      setTimeout(() => {
        clearCart();
        location.href = "/#/home";
      }, 2000);
    }
  }, [payment]);
};

export const usePaymentInfoSaved = (complete) => {
  useEffect(() => {
    if (complete) {
      location.href = "/#/home";
      location.reload();
    }
  }, [complete]);
};
