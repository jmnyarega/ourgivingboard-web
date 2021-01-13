import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import {
  BILLING_DETAILS_PENDING,
  BILLING_DETAILS_SUCCESS,
  BILLING_DETAILS_FAILURE,
} from "./types";

const billingDetailsPending = () => ({
  type: BILLING_DETAILS_PENDING,
});

const billingDetailsSuccess = (payload) => ({
  type: BILLING_DETAILS_SUCCESS,
  payload,
});

const billingDetailsError = (error) => ({
  type: BILLING_DETAILS_FAILURE,
  error,
});

export const billingDetails = () => {
  return (dispatch) => {
    dispatch(billingDetailsPending());
    http()
      .get(`${URL}/payments/billing`)
      .then((response) => dispatch(billingDetailsSuccess(response?.data)))
      .catch((error) => {
        if (
          error?.response?.data === "" ||
          error?.message === "Network Error"
        ) {
          return dispatch(
            billingDetailsError("something went wrong, please try again.")
          );
        } else {
          return dispatch(billingDetailsError(error.response?.data.errors));
        }
      });
  };
};
