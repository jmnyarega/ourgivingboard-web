import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { UPDATE_USER_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

export const updateUserPending = () => ({
  type: PENDING,
});

export const updateUserSuccess = (payload) => ({
  type: UPDATE_USER_SUCCESS,
  payload,
});

export const updateUserFailure = (error) => ({
  type: FAILURE,
  error,
});

export const updateUser = (user) => {
  return (dispatch) => {
    dispatch(updateUserPending());
    http()
      .get(URL, user)
      .then(() => dispatch(updateUserSuccess(user)))
      .catch((error) => dispatch(updateUserFailure(error)));
  };
};
