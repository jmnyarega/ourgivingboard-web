import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { LOGIN_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

export const loginPending = () => ({
  type: PENDING,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (error) => ({
  type: FAILURE,
  error,
});

export const login = (user) => {
  return (dispatch) => {
    dispatch(loginPending());
    http()
      .post(`${URL}/auth/sign_in`, user)
      .then((response) => {
        return dispatch(
          loginSuccess({
            data: response?.data,
            token: response?.headers["access-token"],
            token_type: response?.headers["token-type"],
            uid: response?.headers["uid"],
            expiry: response?.headers["expiry"],
            client: response?.headers["client"],
          })
        );
      })
      .catch((error) => {
        if (error.response && error.response?.status !== 404) {
          return dispatch(loginFailure(error.response?.data.errors));
        } else {
          return dispatch(loginFailure("something went wrong"));
        }
      });
  };
};
