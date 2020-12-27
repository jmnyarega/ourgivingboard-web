import { http } from "../../helpers/axios";
import {
  COMPLETE_PAYMENT_PENDING,
  COMPLETE_PAYMENT_SUCCESS,
  COMPLETE_PAYMENT_FAILURE,
} from "./types";

const completePaymentPending = () => ({
  type: COMPLETE_PAYMENT_PENDING,
});

const completePaymentSuccess = (payload) => ({
  type: COMPLETE_PAYMENT_SUCCESS,
  payload,
});

const completePaymentError = (error) => ({
  type: COMPLETE_PAYMENT_FAILURE,
  error,
});

export const completePayment = (email) => {
  return (dispatch) => {
    dispatch(completePaymentPending());
    http()
      .get(process.env.REACT_APP_API_URL, email)
      .then((response) => dispatch(completePaymentSuccess(response)))
      .catch((error) => dispatch(completePaymentError(error)));
  };
};
