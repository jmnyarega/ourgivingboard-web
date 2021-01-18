import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { CURRENT_USER_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

export const currentUserPending = () => ({
  type: PENDING,
});

export const currentUserSuccess = (payload) => ({
  type: CURRENT_USER_SUCCESS,
  payload,
});

export const currentUserFailure = (error) => ({
  type: FAILURE,
  error,
});

export const getCurrentUser = () => {
  return (dispatch) => {
    dispatch(currentUserPending());
    http()
      .get(`${URL}/dashboards/me`)
      .then((response) => dispatch(currentUserSuccess(response.data)))
      .catch((error) => {
        if (error.response) {
          return dispatch(currentUserFailure(error.response?.data));
        } else {
          return dispatch(currentUserFailure("something went wrong"));
        }
      });
  };
};
