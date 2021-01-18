import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
import { INVITE_SUCCESS } from "./types";
import { FAILURE, PENDING } from "../errorsAndPending/types";

export const invitePending = () => ({
  type: PENDING,
});

export const inviteSuccess = (payload) => ({
  type: INVITE_SUCCESS,
  payload,
});

export const inviteFailure = (error) => ({
  type: FAILURE,
  error,
});

export const invite = (user, invitation_token) => {
  return (dispatch) => {
    dispatch(invitePending());
    http()
      .put(`${URL}/users/invitation`, {
        accept_invitation: {
          ...user,
          invitation_token,
        },
      })
      .then((response) =>
        dispatch(
          inviteSuccess({
            data: response?.data,
            token: response?.headers["access-token"],
            token_type: response?.headers["token-type"],
            uid: response?.headers["uid"],
            expiry: response?.headers["expiry"],
            client: response?.headers["client"],
          })
        )
      )
      .catch((error) => {
        if (error.response) {
          return dispatch(inviteFailure(error.response?.data.invitation_token));
        } else {
          return dispatch(inviteFailure("something went wrong"));
        }
      });
  };
};
