import { http } from "../../helpers/axios";
import { URL } from "../constants/url";
import { INVITE_PENDING, INVITE_SUCCESS, INVITE_FAILURE } from "../constants/types";

export const invitePending = () => ({
  type: INVITE_PENDING,
});

export const inviteSuccess = (payload) => ({
  type: INVITE_SUCCESS,
  payload
});

export const inviteFailure = (error) => ({
  type: INVITE_FAILURE,
  error
});

export const invite = (user) => {
  return (dispatch) => {
    dispatch(invitePending());
    http().post(`${URL}/todos`, user)
      .then(() => dispatch(inviteSuccess({
        user,
        message: "invite success"
      })))
      .catch(error => dispatch(inviteFailure(error)));
  }
};
