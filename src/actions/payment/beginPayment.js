import { http } from "../../helpers/axios";
import {
  BEGIN_PAYMENT_PENDING,
  BEGIN_PAYMENT_SUCCESS,
  BEGIN_PAYMENT_FAILURE,
} from "./types";

const beginPaymentPending = () => ({
  type: BEGIN_PAYMENT_PENDING,
});

const beginPaymentSuccess = (payload) => ({
  type: BEGIN_PAYMENT_SUCCESS,
  payload,
});

const beginPaymentError = (error) => ({
  type: BEGIN_PAYMENT_FAILURE,
  error,
});

export const beginPayment = (email) => {
  return (dispatch) => {
    dispatch(beginPaymentPending());
    http()
      .get(process.env.REACT_APP_API_URL, email)
      .then((response) => dispatch(beginPaymentSuccess(response)))
      .catch((error) => dispatch(beginPaymentError(error)));
  };
};
