import {
  CREATE_PAYMENT_PENDING,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
} from "./types";

const createPaymentPending = () => ({
  type: CREATE_PAYMENT_PENDING,
});

const createPaymentSuccess = (payload) => ({
  type: CREATE_PAYMENT_SUCCESS,
  payload,
});

const createPaymentError = (error) => ({
  type: CREATE_PAYMENT_FAILURE,
  error,
});

export const createPayment = (stripe, CardNumberElement, billingDetails) => {
  return (dispatch) => {
    dispatch(createPaymentPending());
    stripe
      .createPaymentMethod({
        type: "card",
        card: CardNumberElement,
        billing_details: billingDetails,
      })
      .then((response) => {
        if (response.error) {
          return dispatch(createPaymentError(response));
        } else {
          return dispatch(createPaymentSuccess(response));
        }
      })
      .catch((error) => dispatch(createPaymentError(error)));
  };
};
