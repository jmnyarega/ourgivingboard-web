import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { BEGIN_PAYMENT_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

const beginPaymentPending = () => ({
  type: PENDING,
});

const beginPaymentSuccess = (payload) => ({
  type: BEGIN_PAYMENT_SUCCESS,
  payload,
});

const beginPaymentError = (error) => ({
  type: FAILURE,
  error,
});

export const beginPayment = (boards, type, rest) => {
  const payload = {
    line_item_params: boards,
    order_params: { gift_type: type, source: "CC" },
  };

  if (type === "preload") {
    payload.preload_params = { amount: rest[0] };
    payload.order_params = { gift_type: type, source: "USER_ACCOUNT" };
  }
  return (dispatch) => {
    dispatch(beginPaymentPending());
    http()
      .post(`${URL}/orders`, payload)
      .then((response) => dispatch(beginPaymentSuccess(response?.data)))
      .catch((error) => {
        if (
          error?.response?.data === "" ||
          error?.message === "Network Error"
        ) {
          return dispatch(
            beginPaymentError("something went wrong, please try again.")
          );
        } else {
          return dispatch(beginPaymentError(error.response?.data.errors));
        }
      });
  };
};
