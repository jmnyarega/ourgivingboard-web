// import { server as fakeServer } from "../../coverage/fakeServer";
import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { COMPLETE_PAYMENT_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

const completePaymentPending = () => ({
  type: PENDING,
});

const completePaymentSuccess = (payload) => ({
  type: COMPLETE_PAYMENT_SUCCESS,
  payload,
});

const completePaymentError = (error) => ({
  type: FAILURE,
  error,
});

export const completePayment = (customer) => {
  return (dispatch) => {
    dispatch(completePaymentPending());
    http()
      .put(`${URL}/payments/customer`, customer)
      // fakeServer(customer)
      .then(() => dispatch(completePaymentSuccess(customer)))
      .catch((error) => dispatch(completePaymentError(error)));
  };
};
