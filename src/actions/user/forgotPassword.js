import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import {
  FORGOT_PASSWORD_PENDING,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from "./types";

export const forgotPasswordPending = () => ({
  type: FORGOT_PASSWORD_PENDING,
});

export const forgotPasswordSuccess = (payload) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload,
});

export const forgotPasswordFailure = (error) => ({
  type: FORGOT_PASSWORD_FAILURE,
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
