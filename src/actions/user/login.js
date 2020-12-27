import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./types";

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
      .get(URL, user)
      .then(() =>
        dispatch(
          loginSuccess({
            user,
            message: "login success",
          })
        )
      )
      .catch((error) => dispatch(loginFailure(error)));
  };
};
