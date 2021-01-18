import { CREATE_PAYMENT_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

const createPaymentPending = () => ({
  type: PENDING,
});

const createPaymentSuccess = (payload) => ({
  type: CREATE_PAYMENT_SUCCESS,
  payload,
});

const createPaymentError = (error) => ({
  type: FAILURE,
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
