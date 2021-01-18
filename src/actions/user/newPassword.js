import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { NEW_PASSWORD_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

export const newPasswordPending = () => ({
  type: PENDING,
});

export const newPasswordSuccess = (payload) => ({
  type: NEW_PASSWORD_SUCCESS,
  payload,
});

export const newPasswordFailure = (error) => ({
  type: FAILURE,
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
