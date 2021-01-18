import { CONFIRM_PAYMENT_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

const confirmPaymentPending = () => ({
  type: PENDING,
});

const confirmPaymentSuccess = (payload) => ({
  type: CONFIRM_PAYMENT_SUCCESS,
  payload,
});

const confirmPaymentError = (error) => ({
  type: FAILURE,
  error,
});

export const confirmPayment = (stripe, secretIntent, paymentId) => {
  return (dispatch) => {
    dispatch(confirmPaymentPending());
    stripe
      ?.confirmCardPayment(secretIntent, {
        payment_method: paymentId,
      })
      .then((response) => {
        if (response.error) {
          return dispatch(confirmPaymentError(response.error?.message));
        }
        return dispatch(
          confirmPaymentSuccess("You payment was successfuly received")
        );
      })
      .catch((error) => dispatch(confirmPaymentError(error)));
  };
};
