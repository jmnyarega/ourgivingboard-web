import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
// import { server as fakeServer } from "../../coverage/fakeServer";
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

export const invite = (user, invitation_token) => {
  return (dispatch) => {
    dispatch(invitePending());
    http()
      // fakeServer(user)
      .put(`${URL}/auth/invitation`, { user, invitation_token })
      .then(() => dispatch(inviteSuccess(user)))
      .catch((error) => dispatch(inviteFailure(error)));
  };
};
