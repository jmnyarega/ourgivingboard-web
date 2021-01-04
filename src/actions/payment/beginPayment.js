import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
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
      .post(URL, email)
      .then((response) => dispatch(beginPaymentSuccess(response)))
      .catch((error) => dispatch(beginPaymentError(error)));
  };
};
