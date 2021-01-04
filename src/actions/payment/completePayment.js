import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
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
  const user = {
    email,
    password: "josiah",
  };
  return (dispatch) => {
    dispatch(completePaymentPending());
    http()
      .put(`${URL}/auth/invitation`, { user, invite_token: "1212" })
      .then((response) => dispatch(completePaymentSuccess(response)))
      .catch((error) => dispatch(completePaymentError(error)));
  };
};
