import { http } from "../../helpers/axios";
import {
  UPDATE_USER_PENDING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from "./types";

export const updateUserPending = () => ({
  type: UPDATE_USER_PENDING,
});

export const updateUserSuccess = (payload) => ({
  type: UPDATE_USER_SUCCESS,
  payload,
});

export const updateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  error,
});

export const updateUser = (user) => {
  return (dispatch) => {
    dispatch(updateUserPending());
    http()
      .get(process.env.REACT_APP_API_URL, user)
      .then(() =>
        dispatch(
          updateUserSuccess({
            user,
            message: "update success",
          })
        )
      )
      .catch((error) => dispatch(updateUserFailure(error)));
  };
};
