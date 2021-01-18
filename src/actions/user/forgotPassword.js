import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { FORGOT_PASSWORD_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

export const forgotPasswordPending = () => ({
  type: PENDING,
});

export const forgotPasswordSuccess = (payload) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload,
});

export const forgotPasswordFailure = (error) => ({
  type: FAILURE,
  error,
});

export const forgotPassword = (email) => {
  return (dispatch) => {
    dispatch(forgotPasswordPending());
    http()
      .get(URL, email)
      .then(() => dispatch(forgotPasswordSuccess(email)))
      .catch((error) => dispatch(forgotPasswordFailure(error)));
  };
};
