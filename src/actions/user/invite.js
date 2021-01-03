import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { INVITE_PENDING, INVITE_SUCCESS, INVITE_FAILURE } from "./types";

export const invitePending = () => ({
  type: INVITE_PENDING,
});

export const inviteSuccess = (payload) => ({
  type: INVITE_SUCCESS,
  payload,
});

export const inviteFailure = (error) => ({
  type: INVITE_FAILURE,
  error,
});

export const invite = (user) => {
  return (dispatch) => {
    dispatch(invitePending());
    http()
      .post(URL, { user, token: "1,2,3,4" })
      .then(() => dispatch(inviteSuccess(user)))
      .catch((error) => dispatch(inviteFailure(error)));
  };
};
