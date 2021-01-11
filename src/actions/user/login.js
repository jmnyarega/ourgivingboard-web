import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";

export const loginPending = () => ({
  type: LOGIN_PENDING,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

export const login = (user) => {
  return (dispatch) => {
    dispatch(loginPending());
    http()
      .post(`${URL}/users/sign_in`, user)
      .then((response) => dispatch(loginSuccess(response?.data)))
      .catch((error) => {
        if (error.response && error.response?.status !== 404) {
          return dispatch(loginFailure(error.response?.data.errors));
        } else {
          return dispatch(loginFailure("something went wrong"));
        }
      });
  };
};
