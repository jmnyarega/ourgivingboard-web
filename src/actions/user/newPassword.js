import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import {
  NEW_PASSWORD_PENDING,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAILURE,
} from "./types";

export const newPasswordPending = () => ({
  type: NEW_PASSWORD_PENDING,
});

export const newPasswordSuccess = (payload) => ({
  type: NEW_PASSWORD_SUCCESS,
  payload,
});

export const newPasswordFailure = (error) => ({
  type: NEW_PASSWORD_FAILURE,
  error,
});

export const newPassword = (data) => {
  return (dispatch) => {
    dispatch(newPasswordPending());
    http()
      .get(URL, data)
      .then(() => dispatch(newPasswordSuccess(data)))
      .catch((error) => dispatch(newPasswordFailure(error)));
  };
};
