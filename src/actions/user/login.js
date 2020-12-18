import { http } from "../../helpers/axios";
import { URL } from "../constants/url";
import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/types";

export const loginPending = () => ({
  type: LOGIN_PENDING,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error
});

export const login = () => {
  return (dispatch) => {
    dispatch(loginPending());
    http().get(`${URL}/todos`)
      .then(response => dispatch(loginSuccess(response?.data)))
      .catch(error => dispatch(loginFailure(error)));
  }
};
