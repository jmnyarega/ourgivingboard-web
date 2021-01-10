import { http } from "../../helpers/axios";
import { URL } from "../../helpers/constants";
// import { server as fakeServer } from "../../coverage/fakeServer";
import {
  DELETE_COMMUNITY_PENDING,
  DELETE_COMMUNITY_SUCCESS,
  DELETE_COMMUNITY_FAILURE,
} from "./types";

export const deleteCommunityPending = () => ({
  type: DELETE_COMMUNITY_PENDING,
});

export const deleteCommunitySuccess = (payload) => ({
  type: DELETE_COMMUNITY_SUCCESS,
  payload,
});

export const deleteCommunityFailure = (error) => ({
  type: DELETE_COMMUNITY_FAILURE,
  error,
});

export const deleteCommunity = (data) => {
  return (dispatch) => {
    dispatch(deleteCommunityPending());
    http()
      // fakeServer(user)
      .delete(`${URL}/adim/community`, data)
      .then((response) => dispatch(deleteCommunitySuccess(response.data)))
      .catch((error) => {
        if (error.response) {
          return dispatch(
            deleteCommunityFailure(error.response?.data.errrs)
          );
        } else {
          return dispatch(deleteCommunityFailure("something went wrong"));
        }
      });
  };
};
