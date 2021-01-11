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

export const beginPayment = (boards) => {
  return (dispatch) => {
    dispatch(beginPaymentPending());
    http()
      .post(`${URL}/orders`, { order_params: boards })
      .then((response) => dispatch(beginPaymentSuccess(response?.data)))
      .catch((error) => {
        if (error.response && error.response?.status !== 404) {
          return dispatch(beginPaymentError(error.response?.data.errors));
        } else {
          return dispatch(beginPaymentError("something went wrong"));
        }
      });
  };
};
