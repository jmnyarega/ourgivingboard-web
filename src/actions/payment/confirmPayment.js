import {
  CONFIRM_PAYMENT_PENDING,
  CONFIRM_PAYMENT_SUCCESS,
  CONFIRM_PAYMENT_FAILURE,
} from "./types";

const confirmPaymentPending = () => ({
  type: CONFIRM_PAYMENT_PENDING,
});

const confirmPaymentSuccess = (payload) => ({
  type: CONFIRM_PAYMENT_SUCCESS,
  payload,
});

const confirmPaymentError = (error) => ({
  type: CONFIRM_PAYMENT_FAILURE,
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
        return dispatch(confirmPaymentSuccess(response?.paymentIntent.status));
      })
      .catch((error) => dispatch(confirmPaymentError(error)));
  };
};
